const DressStyle = () => {
  return (
    <div className="lg:flex lg:flex-col bg-[#F0F0F0] m-auto mt-[30px] lg:mt-[60px] lg:px-16 pb-[27px] lg:pb-[50px] rounded-[20px] lg:rounded-[40px] max-w-[358px] lg:max-w-[1440px]">
      <h2 className="lg:col-span-2 m-auto lg:mt-[70px] mb-6 lg:mb-[60px] max-w-[200px] lg:max-w-[1000px] font-bold text-[32px] text-center">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="flex flex-col gap-[10px] lg:grid lg:grid-cols-2 lg:m-auto lg:mr-[130px] mb-[30px] lg:max-w-[1200px]">
        <div className="relative bg-white m-auto rounded-[20px] w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] overflow-hidden">
          <button className="w-full h-full">
            <img
              className="w-full h-full object-cover cursor-pointer"
              src="./casual.png"
              alt="casual"
            />
            <span className="top-6 left-6 absolute font-bold text-black text-xl">
              Casual
            </span>
          </button>
        </div>

        <div className="relative bg-white m-auto rounded-[20px] w-[310px] lg:w-[684px] h-[190px] lg:h-[289px] overflow-hidden">
          <button className="w-full h-full">
            <img
              className="w-full h-full object-cover cursor-pointer"
              src="./formal.png"
              alt="formal"
            />
            <span className="top-6 left-6 absolute font-bold text-black text-xl">
              Formal
            </span>
          </button>
        </div>

        <div className="relative bg-white m-auto lg:ml-[80px] rounded-[20px] w-[310px] lg:w-[684px] h-[190px] lg:h-[289px] overflow-hidden">
          <button className="w-full h-full cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="./party.png"
              alt="party"
            />
            <span className="top-6 left-6 absolute font-bold text-black text-xl">
              Party
            </span>
          </button>
        </div>

        <div className="relative bg-white m-auto lg:ml-[280px] rounded-[20px] w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] overflow-hidden">
          <button className="w-full h-full cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="./gym.png"
              alt="gym"
            />
            <span className="top-6 left-6 absolute font-bold text-black text-xl">
              Gym
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
