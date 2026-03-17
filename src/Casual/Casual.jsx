import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { colors } from "../data/data";
import StayUpDated from "../components/StayUpDated/StayUpDated";
import Footer from "../components/Footer/Footer";

const Casual = ({ casualClothes }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sliderRef = useRef(null);
  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);

  if (!casualClothes) return <p>No data found</p>;
  if (casualClothes.length === 0) return <p>Empty list</p>;

  useEffect(() => {
    const slider = sliderRef.current;
    const minThumb = minThumbRef.current;
    const maxThumb = maxThumbRef.current;

    if (!slider || !minThumb || !maxThumb) return;

    const getPositionFromEvent = (e) => {
      const sliderRect = slider.getBoundingClientRect();
      const position = e.clientX - sliderRect.left;
      const percentage = (position / sliderRect.width) * 100;
      return Math.min(Math.max(percentage, 0), 100);
    };

    const handleMinDragStart = (e) => {
      e.preventDefault();
      document.body.style.cursor = "grabbing";

      const handleMinDragging = (moveEvent) => {
        const newPosition = getPositionFromEvent(moveEvent);
        const newValue = Math.min(newPosition, (maxPrice / 250) * 100 - 4);
        const price = Math.round((newValue / 100) * 250);
        setMinPrice(price);
      };

      const handleMinDragEnd = () => {
        document.removeEventListener("mousemove", handleMinDragging);
        document.removeEventListener("mouseup", handleMinDragEnd);
        document.body.style.cursor = "";
      };

      document.addEventListener("mousemove", handleMinDragging);
      document.addEventListener("mouseup", handleMinDragEnd);
    };

    const handleMaxDragStart = (e) => {
      e.preventDefault();
      document.body.style.cursor = "grabbing";

      const handleMaxDragging = (moveEvent) => {
        const newPosition = getPositionFromEvent(moveEvent);
        const newValue = Math.max(newPosition, (minPrice / 250) * 100 + 4);
        const price = Math.round((newValue / 100) * 250);
        setMaxPrice(price);
      };

      const handleMaxDragEnd = () => {
        document.removeEventListener("mousemove", handleMaxDragging);
        document.removeEventListener("mouseup", handleMaxDragEnd);
        document.body.style.cursor = "";
      };

      document.addEventListener("mousemove", handleMaxDragging);
      document.addEventListener("mouseup", handleMaxDragEnd);
    };

    minThumb.addEventListener("mousedown", handleMinDragStart);
    maxThumb.addEventListener("mousedown", handleMaxDragStart);

    return () => {
      minThumb.removeEventListener("mousedown", handleMinDragStart);
      maxThumb.removeEventListener("mousedown", handleMaxDragStart);
    };
  }, [minPrice, maxPrice]);

  const handleColorClick = (colorName) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const handleSizeClick = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="bg-white text-black">
      <Header />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center space-x-2 mt-4 px-4 text-[#666] text-sm">
          <p className="text-[#000]">Home</p>
          <img src="/smallarrow.svg" alt=">" className="w-2 h-2" />
          <p className="text-black">Casual</p>
        </div>

        <div className="flex lg:flex-row flex-col gap-6 px-4">
          <div className="hidden lg:block flex-shrink-0 w-72">
            <div className="top-28 sticky">
              <h2 className="mb-4 font-semibold text-[22px]">Casual</h2>
              <div className="bg-white p-4 border rounded-lg">
                <div className="mb-6">
                  <h4 className="mb-2 font-medium text-md">Categories</h4>
                  {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex justify-between items-center py-2"
                      >
                        <span>{item}</span>
                        <img
                          src="/smallarrow.svg"
                          alt=">"
                          className="w-2 h-2"
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-medium text-md">Price</h4>
                  <div className="flex justify-between mb-1 text-gray-600 text-sm">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                  </div>
                  <div className="relative w-full h-8" ref={sliderRef}>
                    <div className="top-1/2 right-0 left-0 absolute bg-gray-200 rounded-full h-1 -translate-y-1/2 transform"></div>
                    <div
                      className="top-1/2 absolute bg-black rounded-full h-1 -translate-y-1/2 transform"
                      style={{
                        left: `${(minPrice / 250) * 100}%`,
                        right: `${100 - (maxPrice / 250) * 100}%`,
                      }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="250"
                      value={minPrice}
                      onChange={(e) =>
                        setMinPrice(
                          Math.min(Number(e.target.value), maxPrice - 1)
                        )
                      }
                      className="top-1/2 left-0 z-10 absolute opacity-0 w-full h-2 -translate-y-1/2 appearance-none pointer-events-none transform"
                    />
                    <input
                      type="range"
                      min="0"
                      max="250"
                      value={maxPrice}
                      onChange={(e) =>
                        setMaxPrice(
                          Math.max(Number(e.target.value), minPrice + 1)
                        )
                      }
                      className="top-1/2 left-0 z-10 absolute opacity-0 w-full h-2 -translate-y-1/2 appearance-none pointer-events-none transform"
                    />
                    <div
                      ref={minThumbRef}
                      className="top-1/2 z-20 absolute bg-black rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transform"
                      style={{ left: `${(minPrice / 250) * 100}%` }}
                    ></div>
                    <div
                      ref={maxThumbRef}
                      className="top-1/2 z-20 absolute bg-black rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transform"
                      style={{ left: `${(maxPrice / 250) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-medium text-md">Colors</h4>
                  <div className="gap-2 grid grid-cols-6">
                    {colors.slice(0, 12).map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorClick(color.name)}
                        className={`rounded-full w-8 h-8 flex items-center justify-center transition-all ${
                          selectedColors.includes(color.name)
                            ? "border-2 border-black scale-110"
                            : "border-2 border-transparent hover:border-gray-300"
                        }`}
                      >
                        <img
                          src={color.image}
                          alt={color.name}
                          className="rounded-full w-6 h-6 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-medium text-md">Size</h4>
                  <div className="gap-2 grid grid-cols-3">
                    {[
                      "XXS",
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL",
                      "3XL",
                      "4XL",
                    ].map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeClick(size)}
                        className={`px-3 py-1 border rounded-full text-sm transition-colors ${
                          selectedSizes.includes(size)
                            ? "bg-black text-white"
                            : "bg-gray-100 text-black hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="bg-black hover:bg-gray-800 mt-2 py-2 rounded-[62px] w-full font-medium text-white text-sm transition-colors">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 font-[satoshi]">
            <div className="lg:hidden flex justify-between items-center">
              <div className="flex flex-col">
                <h2 className="font-semibold text-[22px]">Casual</h2>
                <p className="font-[satoshi] text-[#666] text-[14px]">
                  Showing 1-8 of {casualClothes.length} Products
                </p>
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="flex rounded-md"
              >
                <img
                  src="/filter.svg"
                  alt="Filter"
                  className="w-[45px] h-[35px]"
                />
              </button>
            </div>

            <section className="py-4">
              <div className="lg:hidden gap-6 grid grid-cols-2">
                {casualClothes.slice(0, 4).map((item) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    className="group"
                  >
                    <div className="flex justify-center items-center bg-[#f2f0f1] w-full h-[220px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="mt-2 font-medium text-[14px] truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-sm">
                      <img
                        src={item.rating}
                        alt="Rating"
                        className="w-[80px] h-[16px]"
                      />
                      <span className="font-medium text-[13px]">
                        {item.rating.replace("/", "").replace(".svg", "")}/
                        <span className="text-[#999]">5</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-[16px]">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <>
                          <span className="text-[14px] text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                          <span className="bg-red-100 px-2 py-[2px] rounded-full font-medium text-[12px] text-red-500">
                            {item.discount}
                          </span>
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="hidden gap-6 lg:grid grid-cols-3">
                {casualClothes.slice(0, 9).map((item) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    className="group"
                  >
                    <div className="flex justify-center items-center bg-[#f2f0f1] w-full h-[220px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="mt-2 font-medium text-[14px] truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-sm">
                      <img
                        src={item.rating}
                        alt="Rating"
                        className="w-[80px] h-[16px]"
                      />
                      <span className="font-medium text-[13px]">
                        {item.rating.replace("/", "").replace(".svg", "")}/
                        <span className="text-[#999]">5</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-[16px]">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <>
                          <span className="text-[14px] text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                          <span className="bg-red-100 px-2 py-[2px] rounded-full font-medium text-[12px] text-red-500">
                            {item.discount}
                          </span>
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mb-10">
              <div className="flex justify-center items-center gap-2 mt-6">
                <button className="px-4 py-2 border rounded-md text-sm">
                  Previous
                </button>
                {[1, 2, 3, 9, 10].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-md text-sm ${
                      page === 1
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border rounded-md text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-50 top-[100px]  left-0 right-0 bottom-0 bg-white rounded-t-2xl p-4 transition-transform duration-300 ease-in-out lg:hidden ${
          showFilters ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button onClick={() => setShowFilters(false)}>
            <img src="/filterX.svg" alt="Close" className="w-5 h-5" />
          </button>
        </div>

        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center py-1 font-[satoshi]"
          >
            <h4>{item}</h4>
            <img src="/smallarrow.svg" alt=">" />
          </div>
        ))}

        <div className="my-5 font-[satoshi]">
          <div className="flex justify-between items-center">
            <h3 className="mb-2 font-medium text-md">Price</h3>
            <img src="/arrowU.svg" alt="arrow" className="w-4 h-4" />
          </div>
          <div className="flex justify-between mb-1 text-gray-600 text-sm">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
          <div className="relative w-full h-8">
            <div className="top-1/2 right-0 left-0 absolute bg-gray-200 rounded-full h-1 -translate-y-1/2 transform"></div>
            <div
              className="top-1/2 absolute bg-black rounded-full h-1 -translate-y-1/2 transform"
              style={{
                left: `${(minPrice / 250) * 100}%`,
                right: `${100 - (maxPrice / 250) * 100}%`,
              }}
            ></div>
            <input
              type="range"
              min="0"
              max="250"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
              }
              className="top-1/2 left-0 z-10 absolute opacity-0 w-full h-2 -translate-y-1/2 appearance-none pointer-events-none transform"
            />
            <input
              type="range"
              min="0"
              max="250"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
              }
              className="top-1/2 left-0 z-10 absolute opacity-0 w-full h-2 -translate-y-1/2 appearance-none pointer-events-none transform"
            />
            <div
              className="top-1/2 z-20 absolute bg-black rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transform"
              style={{ left: `${(minPrice / 250) * 100}%` }}
            ></div>
            <div
              className="top-1/2 z-20 absolute bg-black rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transform"
              style={{ left: `${(maxPrice / 250) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-5 font-[satoshi]">
          <div className="flex">
            <h3 className="mb-2 font-medium text-md">Colors</h3>
          </div>
          <div className="gap-2 grid grid-cols-6">
            {colors.slice(0, 12).map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorClick(color.name)}
                className={`rounded-full w-7 h-7 flex items-center justify-center transition-all ${
                  selectedColors.includes(color.name)
                    ? "border-2 border-black scale-110"
                    : "border-2 border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={color.image}
                  alt={color.name}
                  className="flex items-start rounded-[100%] w-[30px] h-[25px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 font-[satoshi]">
          <div className="flex justify-between items-center">
            <h3 className="mb-2 font-medium text-md">Size</h3>
            <img src="/arrowU.svg" alt="arrow" className="w-4 h-4" />
          </div>
          <div className="gap-2 grid grid-cols-3">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map(
              (size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`px-3 py-1 border rounded-full text-sm transition-colors ${
                    selectedSizes.includes(size)
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              )
            )}
          </div>
        </div>

        <button className="bg-black hover:bg-gray-800 mt-6 py-3 rounded-[62px] w-full font-[satoshi] font-medium text-white text-sm transition-colors">
          Apply Filter
        </button>
      </div>
      <StayUpDated />
      <Footer />
    </div>
  );
};

export default Casual;
