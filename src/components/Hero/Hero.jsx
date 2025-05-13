import React from "react";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center bg-[#f2f0f1] m-auto px-4 lg:px-20 lg:py-20 w-full max-w-[390px] lg:max-w-full">
      <div className="lg:mr-16 w-full max-w-[358px] lg:max-w-[540px]">
        <h2 className="mb-4 max-w-[330px] lg:max-w-[450px] font-bold text-[36px] lg:text-[48px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className="mb-6 lg:w-[560px] text-[#00000060] text-[14px] lg:text-[16px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black mb-12 px-8 py-4 rounded-full font-medium text-[16px] text-white hover:cursor-pointer">
          Shop Now
        </button>

        <div className="flex lg:flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-x-8 gap-y-4 mb-8">
          <div>
            <h3 className="font-bold text-[24px] lg:text-[40px]">200+</h3>
            <p className="lg:w-[150px] text-[#00000060] text-[12px] lg:text-[16px]">
              International Brands
            </p>
          </div>
          <div className="lg:pr-[1px] lg:border-r-[1px]"></div>
          <div>
            <h3 className="font-bold text-[24px] lg:text-[40px]">2,000+</h3>
            <p className="lg:w-[170px] text-[#00000060] text-[12px] lg:text-[16px]">
              High-Quality Products
            </p>
          </div>
          <div className="lg:pr-[1px] lg:border-r-[1px]"></div>
          <div>
            <h3 className="lg:flex lg:m-auto font-bold text-[24px] lg:text-[40px] text-center">
              30,000+
            </h3>
            <p className="lg:w-[230px] text-[#00000060] text-[12px] lg:text-[16px]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <div className="relative m-auto lg:mb-0 w-full lg:w-auto lg:max-w-[560px]">
        <img src="./model.png" alt="models" className="w-full" />
        <img
          src="./bigStar.svg"
          alt="big star"
          className="top-[40px] right-[21px] absolute"
        />
        <img
          src="./smallStar.svg"
          alt="small star"
          className="bottom-[247px] left-[27px] absolute"
        />
      </div>

      <div className="lg:right-0 lg:bottom-[70px] lg:left-0 lg:absolute bg-black py-8 w-full lg:w-full overflow-hidden">
        <div className="flex space-x-12 px-4 animate-scroll">
          {[...Array(2)].map((_, i) => [
            <img
              key={`versace-${i}`}
              src="./versace.svg"
              alt="Versace"
              className="inline-block h-6"
            />,
            <img
              key={`zara-${i}`}
              src="./zara.svg"
              alt="Zara"
              className="inline-block h-6"
            />,
            <img
              key={`gucci-${i}`}
              src="./gucci.svg"
              alt="Gucci"
              className="inline-block h-6"
            />,
            <img
              key={`prada-${i}`}
              src="./prada.svg"
              alt="Prada"
              className="inline-block h-6"
            />,
            <img
              key={`ck-${i}`}
              src="./ck.svg"
              alt="Calvin Klein"
              className="inline-block h-6"
            />,
          ])}
        </div>
      </div>
    </div>
  );
};

export default Hero;
