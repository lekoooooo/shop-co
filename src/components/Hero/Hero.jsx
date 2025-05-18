import Brands from "../Brands/Brands";

const Hero = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center bg-[#f2f0f1] m-auto px-4 lg:px-20 lg:py-20 w-full max-w-[390px] lg:max-w-full">
        <div className="lg:mr-16 w-full max-w-[358px] lg:max-w-[540px]">
          <h2 className="mb-4 max-w-[330px] lg:max-w-[450px] font-[fontspring] font-bold text-[36px] lg:text-[48px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="mb-6 lg:w-[560px] font-[satoshi] text-[#00000060] text-[14px] lg:text-[16px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black mb-12 px-8 py-4 rounded-full font-[satoshi] font-medium text-[16px] text-white hover:cursor-pointer">
            Shop Now
          </button>

          <div className="flex lg:flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-x-8 gap-y-4 mb-8">
            <div>
              <h3 className="font-[satoshi] font-bold text-[24px] lg:text-[40px]">
                200+
              </h3>
              <p className="lg:w-[150px] font-[satoshi] text-[#00000060] text-[12px] lg:text-[16px]">
                International Brands
              </p>
            </div>
            <div className="lg:pr-[1px] lg:border-r-[1px]"></div>
            <div>
              <h3 className="font-[satoshi] font-bold text-[24px] lg:text-[40px]">
                2,000+
              </h3>
              <p className="lg:w-[170px] font-[satoshi] text-[#00000060] text-[12px] lg:text-[16px]">
                High-Quality Products
              </p>
            </div>
            <div className="lg:pr-[1px] lg:border-r-[1px]"></div>
            <div>
              <h3 className="lg:flex lg:m-auto font-[satoshi] font-bold text-[24px] lg:text-[40px] text-center">
                30,000+
              </h3>
              <p className="lg:w-[230px] font-[satoshi] text-[#00000060] text-[12px] lg:text-[16px]">
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
      </div>
      <Brands />
    </div>
  );
};

export default Hero;
