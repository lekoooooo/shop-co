import React from "react";
import { motion } from "framer-motion";
import { brands } from "../../data/data";

const duplicatedSlides = [...brands, ...brands];

const MotionSlider = ({ reverse = false, gap = "gap-9", isMobile = false }) => (
  <motion.div
    className={`flex ${gap} items-center`}
    animate={{
      x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 15,
        repeat: Infinity,
      },
    }}
  >
    {duplicatedSlides.map((slide, index) => (
      <div
        key={index}
        className={`flex-shrink-0 flex justify-center items-center ${
          isMobile ? "h-[63px]" : ""
        }`}
        style={{ width: `${100 / brands.length}%` }}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className="object-contain"
          style={{
            width: isMobile
              ? `${slide.w * slide.mobileScale}px`
              : `${slide.w}px`,
            height: isMobile
              ? `${slide.h * slide.mobileScale}px`
              : `${slide.h}px`,
          }}
        />
      </div>
    ))}
  </motion.div>
);

const Brands = () => {
  return (
    <div className="relative flex items-center bg-black lg:mx-auto w-full lg:max-w-[1920px] h-[146px] lg:h-[122px] overflow-hidden">
      <div className="hidden lg:flex w-full h-full">
        <MotionSlider gap="gap-[106px]" />
      </div>

      <div className="lg:hidden flex flex-col justify-center space-y-5 w-full h-full">
        <MotionSlider gap="gap-5" isMobile />
        <MotionSlider gap="gap-5" reverse isMobile />
      </div>
    </div>
  );
};

export default Brands;
