// import { useState } from "react";
// import { Link } from "react-router-dom";

// const NewArrivals = ({ products }) => {
//   if (!products || products.length === 0) return null;
//   const [showAll, setShowAll] = useState(false);
//   const visibleProducts = showAll ? products : products.slice(0, 4);

//   return (
//     <section className="mx-auto px-4 py-8 max-w-6xl">
//       <h2 className="lg:flex lg:justify-center mb-4 font-[fontspring] lg:text-[48px]">
//         New Arrivals
//       </h2>
//       <div className="flex gap-4 lg:grid lg:grid-cols-4 overflow-x-auto font-[satoshi]">
//         {products.map((product) => (
//           <Link
//             key={product.id}
//             to={`/product/${product.id}`}
//             className="flex-shrink-0 w-[170px] lg:w-auto"
//           >
//             <div className="bg-[#f2f0f1] mb-2 w-full h-[198px] lg:h-[320px]">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <h4 className="mb-1 font-medium text-[14px] lg:text-[16px]">
//               {product.title}
//             </h4>
//             <div className="flex items-center gap-1 mb-1">
//               <img
//                 src={`/${product.rating}.svg`}
//                 alt="Rating"
//                 className="h-4"
//               />
//               <span className="text-[12px] lg:text-[14px]">
//                 {product.rating}/<span className="text-[#00000099]">5</span>
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <p className="font-bold text-[20px] lg:text-[22px]">
//                 {product.price}
//               </p>
//               {product.originalPrice && (
//                 <>
//                   <span className="text-[20px] text-gray-400 line-through">
//                     {product.originalPrice}
//                   </span>
//                   <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
//                     {product.discount}
//                   </div>
//                 </>
//               )}
//             </div>
//           </Link>
//         ))}
//         <div className="mt-6 lg:mt-10 text-center">
//           <button
//             className="hidden lg:flex lg:m-auto lg:px-6 lg:py-2 lg:border lg:border-black lg:rounded-full font-[satoshi] font-medium text-[14px] lg:text-[16px] underline lg:no-underline cursor-pointer"
//             onClick={() => setShowAll((prev) => !prev)}
//           >
//             {showAll ? "Show Less" : "View All"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;
import { useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({ products }) => {
  if (!products || products.length === 0) return null;
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProducts = products.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const showLess = () => {
    setVisibleCount(4);
  };

  return (
    <section className="mx-auto px-4 py-8 max-w-6xl">
      <h2 className="lg:flex lg:justify-center mb-4 font-[fontspring] lg:text-[48px]">
        New Arrivals
      </h2>
      <div className="flex gap-4 lg:grid lg:grid-cols-4 overflow-x-auto font-[satoshi]">
        {visibleProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex-shrink-0 w-[170px] lg:w-auto"
          >
            <div className="bg-[#f2f0f1] mb-2 w-full h-[198px] lg:h-[320px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="mb-1 font-medium text-[14px] lg:text-[16px]">
              {product.title}
            </h4>
            <div className="flex items-center gap-1 mb-1">
              <img
                src={`/${product.rating}.svg`}
                alt="Rating"
                className="h-4"
              />
              <span className="text-[12px] lg:text-[14px]">
                {product.rating}/<span className="text-[#00000099]">5</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-[20px] lg:text-[22px]">
                {product.price}
              </p>
              {product.originalPrice && (
                <>
                  <span className="text-[20px] text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
                    {product.discount}
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
      {products.length > 4 && (
        <div className="mt-6 lg:mt-10 text-center">
          <button
            className="hidden lg:flex lg:m-auto lg:px-6 lg:py-2 lg:border lg:border-black lg:rounded-full font-[satoshi] font-medium text-[14px] lg:text-[16px] underline lg:no-underline cursor-pointer"
            onClick={visibleCount < products.length ? loadMore : showLess}
          >
            {visibleCount < products.length ? "View All" : "Show Less"}
          </button>
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
