

import React, { useState } from 'react';

const HappyCustomers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      rating: <img src="./5.svg" alt="5 stars" />,
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      rating: <img src="./5.svg" alt="5 stars" />,
      name: "Alex K.",
      text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.'
    },      
    {
      rating: <img src="./5.svg" alt="5 stars" />,
      name: "James L.",
      text: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.'
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => 
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
  
  const prevSlide = () => setCurrentSlide(prev => 
    prev === 0 ? testimonials.length - 1 : prev - 1
  );

  return (
    <div className="mx-auto px-4 max-w-[390px]">
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevSlide}>
          <img src="./lef.svg" alt="Previous" className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-[32px] text-center">OUR HAPPY CUSTOMERS</h2>
        <button onClick={nextSlide}>
          <img src="./rite.svg" alt="Next" className="w-6 h-6" />
        </button>
      </div>
      
      <div className="bg-white p-6 border border-gray-300 rounded-[20px]">
        <div className="mb-4 ml-[10px] w-[118px]">
          {testimonials[currentSlide].rating}
        </div>
        
        <div className="flex gap-2 mb-4">
          <h3 className="font-bold">{testimonials[currentSlide].name}</h3>
          <span className="text-gray-400 text-xl"><img src="./mark.svg" alt="checkmark" /></span>
        </div>
        
        <p className="text-gray-600 text-center">
          {testimonials[currentSlide].text}
        </p>
      </div>
    </div>
  );
};

export default HappyCustomers;