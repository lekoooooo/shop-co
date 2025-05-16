const StayUpDated = () => {
  return (
    <div className="top-[135px] lg:top-[190px] relative lg:relative flex justify-center lg:bg-transparent mt-10">
      <div className="lg:flex flex-1 lg:justify-between lg:items-center bg-black p-6 rounded-[20px] w-full max-w-[358px] lg:max-w-[1240px] lg:max-h-[200px] text-white">
        <h2 className="mb-4 lg:max-w-[550px] font-extrabold text-[32px] lg:text-[40px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <form className="flex flex-col items-center gap-3">
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-full lg:w-[349px]">
            <img src="/mail.svg" alt="email icon" className="mr-2 w-4 h-4" />
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 bg-transparent outline-none text-black text-sm placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            className="bg-white px-6 py-2 rounded-full lg:w-[349px] font-semibold text-black whitespace-nowrap"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default StayUpDated;
