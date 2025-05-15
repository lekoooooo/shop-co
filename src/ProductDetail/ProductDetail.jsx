// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import { products } from "../data/data";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { productId } = useParams(6);

//   const product = products.find((p) => p.id === 6);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <div className="mx-auto px-4 py-6 max-w-6xl">
//         <div className="flex items-center mb-6 text-gray-600 text-sm">
//           <p className="hover:text-gray-900">Home</p>
//           <img src="./smallarrow.svg" alt=">" className="mx-2 w-2 h-2" />
//           <p className="hover:text-gray-900">Shop</p>
//           <img src="./smallarrow.svg" alt=">" className="mx-2 w-2 h-2" />
//           <p className="hover:text-gray-900">Men</p>
//           <img src="./smallarrow.svg" alt=">" className="mx-2 w-2 h-2" />
//           <p className="font-medium text-gray-900">T-Shirts</p>
//         </div>

//         <div className="flex md:flex-row flex-col gap-8">
//           <div className="md:w-1/2">
//             <div className="flex justify-center items-center bg-gray-100 mb-4 p-8 rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="max-h-80 object-contain"
//               />
//             </div>
//             <div className="flex gap-2">
//               <div className="bg-gray-100 p-2 rounded-[20px] w-1/3">
//                 <img
//                   src="./front.png"
//                   alt="product detail"
//                   className="w-full h-auto"
//                 />
//               </div>
//               <div className="bg-gray-100 p-2 rounded-[20px] w-1/3">
//                 <img
//                   src="./front.png"
//                   alt="product detail"
//                   className="w-full h-auto"
//                 />
//               </div>
//               <div className="bg-gray-100 p-2 rounded-[20px] w-1/3">
//                 <img
//                   src="./brownmodel.png"
//                   alt="model wearing product"
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="md:w-1/2">
//             <h1 className="mb-2 font-bold text-2xl">{product.title}</h1>

//             <div className="flex items-center gap-1 mb-4">
//               <img
//                 src={`./${product.rating}.svg`}
//                 alt={`${product.rating} star rating`}
//                 className="h-4"
//               />
//               <span className="text-sm">{product.rating}/5</span>
//             </div>

//             <div className="flex items-center gap-3 mb-4">
//               <p className="font-bold text-2xl">{product.price}</p>
//               {product.oldPrice && (
//                 <>
//                   <span className="text-gray-400 text-xl line-through">
//                     {product.oldPrice}
//                   </span>
//                   <span className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-red-500 text-xs">
//                     {product.discount}
//                   </span>
//                 </>
//               )}
//             </div>

//             <p className="mb-6 text-gray-600">
//               This graphic t-shirt which is perfect for any occasion.
//               <br />
//               Crafted from a soft and breathable fabric, it offers superior
//               comfort and style.
//             </p>

//             <div className="mb-6 pt-6 border-gray-200 border-t">
//               <h3 className="mb-3 font-medium text-gray-900 text-sm">
//                 Select colors
//               </h3>
//               <div className="flex gap-3">
//                 <img
//                   src="./browncircle.svg"
//                   alt="brown"
//                   className="rounded-full w-8 h-8 cursor-pointer"
//                 />
//                 <img
//                   src="./green.svg"
//                   alt="green"
//                   className="rounded-full w-8 h-8 cursor-pointer"
//                 />
//                 <img
//                   src="./purple.svg"
//                   alt="purple"
//                   className="rounded-full w-8 h-8 cursor-pointer"
//                 />
//                 <img
//                   src="./nike.svg"
//                   alt="selected"
//                   className="w-8 h-8 cursor-pointer"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-[#0000001A] border-t-[1px]"></div>
//         <div>
//             <p>Choose Size</p>

//             </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetail;
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { products } from "../data/data";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();

  const product = products.find((p) => p.id === Number(6));

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  if (!product) {
    return <div>Product not found</div>;
  }

  const getNumericPrice = (priceString) =>
    parseFloat(priceString.replace("$", ""));
  const basePrice = getNumericPrice(product.price);
  const currentPrice = (basePrice * quantity).toFixed(2);

  const baseOldPrice = product.oldPrice
    ? getNumericPrice(product.oldPrice)
    : null;
  const currentOldPrice = baseOldPrice
    ? (baseOldPrice * quantity).toFixed(2)
    : null;

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = [
    { name: "brown", image: "./browncircle.svg" },
    { name: "green", image: "./green.svg" },
    { name: "purple", image: "./purple.svg" },
  ];

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="font-sans">
      <Header />

      <div className="mx-auto px-4 py-6 max-w-6xl">
        <div className="flex items-center mb-6 text-gray-600 text-sm">
          <p className="hover:text-gray-900">Home</p>
          <img src="./smallarrow.svg" alt=">" className="mx-2 w-2 h-2" />
          <p className="hover:text-gray-900">Shop</p>
          <img src="./smallarrow.svg" alt=">" className="mx-2 w-2 h-2" />
          <p className="hover:text-gray-900">Men</p>
          <img src="./smallarrow.svg" alt=">" className="mx-2 w-2 h-2" />
          <p className="font-medium text-gray-900">T-Shirts</p>
        </div>

        <div className="flex md:flex-row flex-col gap-8">
          <div className="md:w-1/2">
            <div className="flex justify-center items-center bg-gray-100 mb-4 p-8 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-80 object-contain"
              />
            </div>
            <div className="flex gap-2">
              <div className="bg-gray-100 p-2 rounded-[20px] w-1/3">
                <img
                  src="./front.png"
                  alt="Front view"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-100 p-2 rounded-[20px] w-1/3">
                <img
                  src="./front.png"
                  alt="Side view"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-100 p-2 rounded-[20px] w-1/3">
                <img
                  src="./brownmodel.png"
                  alt="Model"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="mb-2 font-bold text-2xl">{product.title}</h1>

            <div className="flex items-center gap-1 mb-4">
              <img
                src={`./star-${product.rating}.svg`}
                alt="Rating"
                className="h-4"
              />
              <span className="text-sm">{product.rating}/5</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <p className="font-bold text-2xl">${currentPrice}</p>
              {currentOldPrice && (
                <>
                  <span className="text-gray-400 text-xl line-through">
                    ${currentOldPrice}
                  </span>
                  <span className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-red-500 text-xs">
                    {product.discount}
                  </span>
                </>
              )}
            </div>

            <p className="mb-6 text-gray-600">
              This graphic t-shirt which is perfect for any occasion.
              <br />
              Crafted from a soft and breathable fabric, it offers superior
              comfort and style.
            </p>

            <div className="mb-6 pt-6 border-gray-200 border-t">
              <h3 className="mb-3 font-medium text-gray-900 text-sm">
                Select colors
              </h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <img
                    key={color.name}
                    src={color.image}
                    alt={color.name}
                    className={`rounded-full w-8 h-8 cursor-pointer ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6 pt-6 border-gray-200 border-t">
              <h3 className="mb-3 font-medium text-gray-900 text-sm">
                Choose Size
              </h3>
              <div className="flex gap-3 mb-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <p className="font-medium text-sm">Quantity:</p>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={decreaseQuantity}
                    className="hover:bg-gray-100 px-3 py-1"
                    disabled={quantity <= 1}
                  >
                    <img src="./-.svg" alt="Decrease" className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-1 min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="hover:bg-gray-100 px-3 py-1"
                  >
                    <img src="./+.svg" alt="Increase" className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                className="bg-black hover:bg-gray-800 py-3 rounded w-full font-medium text-white transition"
                disabled={!selectedSize || !selectedColor}
              >
                Add to Cart - ${currentPrice}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-gray-200 border-t">
          <div className="flex border-gray-200 border-b">
            <button
              onClick={() => setActiveTab("details")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "details"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "reviews"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Ratings & Reviews
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "faqs"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              FAQs
            </button>
          </div>

          <div className="py-6">
            {activeTab === "details" && (
              <div>
                <h4 className="mb-4 font-bold">Product Information</h4>
                <p className="text-gray-600">
                  Material: 100% Cotton
                  <br />
                  Care: Machine wash cold, tumble dry low
                  <br />
                  Fit: Regular fit
                  <br />
                  Design: Graphic print on front
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h4 className="mb-4 font-bold">Customer Reviews</h4>
                <div className="flex items-center gap-2 mb-2">
                  <img src="./star-4.5.svg" alt="4.5 stars" className="h-4" />
                  <span>4.5 out of 5</span>
                </div>
                <p className="text-gray-600">
                  "Great quality and comfortable fit!" - Jane D.
                </p>
              </div>
            )}

            {activeTab === "faqs" && (
              <div>
                <h4 className="mb-4 font-bold">Frequently Asked Questions</h4>
                <div className="mb-6">
                  <p className="font-medium">What's the return policy?</p>
                  <p className="text-gray-600">30 days free returns.</p>
                </div>
                <div>
                  <p className="font-medium">How long does shipping take?</p>
                  <p className="text-gray-600">3-5 business days.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
