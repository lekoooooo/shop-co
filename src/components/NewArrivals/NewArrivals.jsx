import { Link } from "react-router-dom";

const NewArrivals = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="mx-auto px-4 py-8 max-w-6xl">
      <h2 className="mb-4 font-bold text-xl">New Arrivals</h2>
      <div className="flex gap-4 lg:grid lg:grid-cols-4 overflow-x-auto">
        {products.map((product) => (
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
    </section>
  );
};

export default NewArrivals;
