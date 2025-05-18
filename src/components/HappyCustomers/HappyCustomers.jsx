import React, { useState } from "react";
import { testimonials } from "../../data/data";
const HappyCustomers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerPage = 3;

  const maxSlide = testimonials.length - cardsPerPage;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  return (
    <div className="lg:flex lg:justify-center mx-auto mt-[100px] lg:mt-[80px] px-4 max-w-screen-xl">
      <div className="w-full max-w-[358px] lg:max-w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-[fontspring] font-bold text-[32px]">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2 ml-auto">
            <button onClick={prevSlide}>
              <img src="/lef.svg" alt="Previous" className="w-6 h-6" />
            </button>
            <button onClick={nextSlide}>
              <img src="/rite.svg" alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center gap-4 font-[satoshi]">
          {testimonials
            .slice(currentSlide, currentSlide + cardsPerPage)
            .map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white p-6 border border-gray-300 rounded-[20px] w-full lg:w-[400px] lg:h-[240px]"
              >
                <div className="mb-4 ml-[10px] w-[118px]">
                  <img src={item.rating} alt={item.title} />
                </div>
                <div className="flex gap-2 mb-4">
                  <h3 className="font-bold">{item.name}</h3>
                  <span className="text-gray-400 text-xl">
                    <img src="/mark.svg" alt="checkmark" />
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-left">{item.text}</p>
              </div>
            ))}
        </div>

        <div className="lg:hidden">
          <div className="bg-white p-6 border border-gray-300 rounded-[20px]">
            <div className="mb-4 ml-[10px] w-[118px]">
              {testimonials[currentSlide].rating}
            </div>
            <div className="flex gap-2 mb-4">
              <h3 className="font-bold">{testimonials[currentSlide].name}</h3>
              <span className="text-gray-400 text-xl">
                <img src="/mark.svg" alt="checkmark" />
              </span>
            </div>
            <p className="text-gray-600 text-sm text-center">
              {testimonials[currentSlide].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
