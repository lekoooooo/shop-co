

const Hero = () => {
    return (
      <div className="flex flex-col items-center bg-[#f2f0f1] m-auto px-4 w-full max-w-[390px]">
     
        <div className="w-full max-w-[358px]">
   
          <h2 className="max-w-[330px] font-bold text-[36px] [mb-4]">
         FIND CLOTHES THAT MATCHES YOUR STYLE
      </h2>
          
          <p className="mb-6 max-w-[360px] text-[#00000060] text-[14px]">
         Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
          
        
          <button className="bg-black mb-12 py-4 rounded-full w-full font-medium text-[16px] text-white">
            Shop Now
          </button>
     
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <div>
              <h3 className="font-bold text-[24px]">200+</h3>
              <p className="text-[#00000060] text-[12px]">International Brands</p>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">2,000+</h3>
              <p className="text-[#00000060] text-[12px]">High-Quality Products</p>
            </div>
            <div>
              <h3 className="font-bold text-[24px] text-center">30,000+</h3>
              <p className="text-[#00000060] text-[12px]">Happy Customers</p>
            </div>
          </div>
        </div>
  
    
        <div className="relative mb-8">
          <img src="./model.png" alt="models" className="w-full" />
          <img src="./bigStar.svg" alt="small star" className="top-[40px] right-[21px] absolute" />
          <img src="./smallStar.svg" alt="big star" className="bottom-[247px] left-[27px] absolute" />
        </div>
  
        <div className="bg-black py-8 pr-[15px] w-full max-w-[390px]">
  <div className="flex justify-between mb-6 ml-[16px]">
    <img src="./versace.svg" alt="Versace" className="h-6" />
    <img src="./zara.svg" alt="Zara" className="h-6" />
    <img src="./gucci.svg" alt="Gucci" className="h-6" />
  </div>
  <div className="flex justify-between space-x-[21px] m-auto">
    <img src="./prada.svg" alt="Prada" className="ml-12 h-5" />
    <img src="./ck.svg" alt="ck" className="mr-12 h-6" />
  </div>
</div>
       
      </div>
    );
  };
  
  export default Hero;