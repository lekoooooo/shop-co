import { Link } from "react-router-dom";
import { products } from "../data/data"; // Your existing product data

const ProductList = () => {
  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-6 font-bold text-2xl">All Products</h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`} // Links to ProductDetail
            key={product.id}
            className="hover:shadow-md border rounded-lg overflow-hidden transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium">{product.title}</h3>
              <p className="font-bold text-gray-800">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-500 text-sm line-through">
                  {product.oldPrice}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
