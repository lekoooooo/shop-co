import { useState } from "react";
import { products } from "../../data/data";
const ProductCard = ({ product }) => (
  <div className="flex-shrink-0 w-[170px] lg:w-auto">
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
      <img src={`./${product.rating}.svg`} alt="Rating" className="h-4" />
      <span className="text-[12px] lg:text-[14px]">
        {product.rating}/<span className="text-[#00000099]">5</span>
      </span>
    </div>
    <div className="flex items-center gap-2">
      <p className="font-bold text-[20px] lg:text-[22px]">{product.price}</p>
      {product.oldPrice && (
        <>
          <span className="text-[20px] text-gray-400 line-through">
            {product.oldPrice}
          </span>
          <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
            {product.discount}
          </div>
        </>
      )}
    </div>
  </div>
);

const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mx-auto lg:mt-[72px] px-4 max-w-[390px] lg:max-w-[1440px]">
      <h2 className="mb-6 lg:mb-[50px] font-bold text-[32px] lg:text-[40px] text-center">
        NEW ARRIVALS
      </h2>

      <div className="lg:hidden flex gap-4 pb-2 overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="hidden lg:gap-6 lg:grid lg:grid-cols-4">
        {(showAll ? products : products.slice(0, 4)).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 lg:mt-10 text-center">
        <button
          className="hidden lg:flex lg:m-auto lg:px-6 lg:py-2 lg:border lg:border-black lg:rounded-full font-medium text-[14px] lg:text-[16px] underline lg:no-underline cursor-pointer"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
