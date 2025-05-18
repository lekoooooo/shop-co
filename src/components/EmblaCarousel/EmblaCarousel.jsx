import { useState, useEffect, useRef } from "react";
import { reviewPage } from "../../data/data";

export function EmblaCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const slideContainerRef = useRef(null);
  const totalSlides = reviewPage.length;

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(1);
      }
    };
    updateVisibleSlides();

    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const scrollPrev = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrentSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transition = "transform 0.3s ease-in-out";

      const translateXPercent = (currentSlide * 100) / visibleSlides;
      slideContainerRef.current.style.transform = `translateX(-${translateXPercent}%)`;
    }
  }, [currentSlide, visibleSlides]);

  return (
    <div className="relative flex flex-col justify-center items-center py-8 w-full">
      <h2 className="flex mr-[85px] lg:mr-[480px] mb-4 max-w-[226px] lg:max-w-[1920px] font-[fontspring] font-bold lg:text-[48px] text-xl">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="w-full max-w-6xl overflow-hidden">
        <div className="top-10 lg:top-[75px] right-4 lg:right-[380px] z-10 absolute flex lg:flex gap-[5px]">
          <button onClick={scrollPrev} className="p-1">
            <img src="/lef.svg" alt="left" className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="p-1">
            <img src="/rite.svg" alt="right" className="w-6 h-6" />
          </button>
        </div>

        <div
          className="flex"
          ref={slideContainerRef}
          style={{
            width: `${(100 / visibleSlides) * totalSlides}%`,
          }}
        >
          {reviewPage.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <div className="bg-white shadow-md mx-auto p-4 border rounded-xl max-w-[359px] h-[200px]">
                <img
                  src={review.rating}
                  alt={review.title}
                  className="mb-1 h-4"
                />
                <div className="flex items-center gap-1 mb-2 font-[satoshi] font-bold">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <img src="/verified.svg" alt="verified" className="w-4 h-4" />
                </div>
                <p className="mb-1 font-[satoshi] text-gray-700 text-sm">
                  "{review.text}"
                </p>
                <p className="mt-2 font-[satoshi] text-gray-400 text-xs">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
