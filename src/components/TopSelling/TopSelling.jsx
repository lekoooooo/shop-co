import React, { useState } from "react";
import { products } from "../../data/data";
import { Link } from "react-router-dom";

const TopSelling = () => {
  return (
    <div className="mx-auto mt-[32px] px-4 max-w-[390px] lg:max-w-[1440px]">
      <div className="lg:mt-[60px] border-gray-300 border-t-[2px]"></div>
      <h2 className="lg:mt-[64px] mb-[55px] font-[fontspring] font-bold text-[32px] lg:text-[40px] text-center">
        TOP SELLING
      </h2>

      <div className="lg:hidden flex gap-4 overflow-x-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            className="flex-shrink-0 w-[180px] font-[satoshi]"
          >
            <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="mb-1 font-medium text-[14px]">{product.title}</h4>
            <div className="flex items-center gap-1 mb-1">
              <img
                src={`/${product.rating}.svg`}
                alt="Rating"
                className="h-4"
              />
              <span className="text-[12px]">{product.rating}/5</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-[20px]">{product.price}</p>
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

      <div className="hidden gap-6 lg:grid lg:grid-cols-4 font-[satoshi]">
        {products.map((product) => (
          <div key={product.id}>
            <div className="bg-[#f2f0f1] mb-2 w-full h-[320px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="mb-1 font-medium text-[16px]">{product.title}</h4>
            <div className="flex items-center gap-1 mb-1">
              <img
                src={`/${product.rating}.svg`}
                alt="Rating"
                className="h-4"
              />
              <span className="text-[14px]">{product.rating}/5</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-[22px]">{product.price}</p>
              {product.originalPrice && (
                <>
                  <span className="text-[22px] text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
                    {product.discount}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 lg:mt-10 text-center">
        <Link to="/casual">
          <button className="hidden lg:flex lg:m-auto lg:px-6 lg:py-2 lg:border lg:border-black lg:rounded-full font-[satoshi] font-medium text-[14px] lg:text-[16px] underline lg:no-underline cursor-pointer">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
