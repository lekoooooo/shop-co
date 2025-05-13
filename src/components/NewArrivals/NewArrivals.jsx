

// import React from 'react'

// const NewArrivals = () => {
//   return (
//     <div className="mx-auto px-4 max-w-[390px]">
//       <h2 className="mb-6 font-bold text-[32px] text-center">NEW ARRIVALS</h2>
      
//       <div className="flex gap-4">
//         <div className="flex-1">
//           <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
//             <img 
//               src="./blacktee.png" 
//               alt="Black T-shirt" 
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <h4 className="mb-1 w-[190px] font-medium text-[14px]">T-SHIRT WITH TAPE DETAILS</h4>
//           <div className="flex items-center gap-1 mb-1">
//             <img src="./4.5.svg" alt="Rating" className="h-4"/>
//             <span className="text-[12px]">4.5/5</span>
//           </div>
//           <p className="font-bold text-[20px]">$120</p>
//         </div>
        
   
//         <div className="flex-1">
//           <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
//             <img 
//               src="./skinnyjeans.svg" 
//               alt="Skinny Jeans" 
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <h4 className="mb-1 font-medium text-[14px]">Skinny Fit Jeans</h4>
//           <div className="flex items-center gap-1 mb-1">
//             <img src="./3.5.svg" alt="Rating" className="h-4"/>
//             <span className="text-[12px]">3.5/5</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <p className="font-bold text-[20px]">$240</p>
//             <span className="text-[20px] text-gray-400 line-through">$260</span>
//             <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
//               -20%
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="mt-6 text-center">
//         <button className="font-medium text-[14px] underline">View All</button>
//       </div>
//     </div>
//   )
// }

// export default NewArrivals


const NewArrivals = () => {
  return (
    <div className="lg:m-auto mx-auto lg:mt-[150px] px-4 max-w-[390px] lg:max-w-[1440px]">
      <h2 className="mb-6 lg:mb-10 font-bold text-[32px] lg:text-[40px] text-center lg:text-center">
        NEW ARRIVALS
      </h2>

      <div className="flex flex-col gap-4 lg:gap-x-6 lg:grid lg:grid-cols-5 lg:m-auto lg:w-full">
        {/* Repeat the structure below for each product */}
        <div className="flex-1">
          <div className="bg-[#f2f0f1] mb-2 w-full h-[198px] lg:h-[320px]">
            <img
              src="./blacktee.png"
              alt="Black T-shirt"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="mb-1 font-medium text-[14px] lg:text-[16px]">T-shirt with Tape Details</h4>
          <div className="flex items-center gap-1 mb-1">
            <img src="./4.5.svg" alt="Rating" className="h-4" />
            <span className="text-[12px] lg:text-[14px]">4.5/<span className="text-[#00000099]">5</span></span>
          </div>
          <p className="font-bold text-[20px] lg:text-[22px]">$120</p>
        </div>
        <div className="flex-1">
          <div className="bg-[#f2f0f1] mb-2 w-full h-[198px] lg:h-[320px]">
            <img
              src="./skinnyjeans.svg"
              alt="Black T-shirt"
              className="w-full h-full lg:h-[300px] object-contain"
            />
          </div>
          
          <h4 className="mb-1 font-medium text-[14px] lg:text-[16px]">Skinny Fit Jeans</h4>
          <div className="flex items-center gap-1 mb-1">
            <img src="./3.5.svg" alt="Rating" className="h-4" />
            <span className="text-[12px] lg:text-[14px]">3.5/<span className="text-[#00000099]">5</span></span>
          </div>
          <div className="lg:flex lg:gap-[15px]">
          <p className="font-bold text-[20px] lg:text-[22px]">$240</p>
          <span className="text-[20px] text-gray-400 line-through">$260</span>
          <div className="bg-red-100 px-2 py-0.5 rounded-full lg:w-[45px] lg:h-[25px] font-medium text-[12px] text-red-500">
              -20%
            </div>
            </div>

        </div>
        
        <div className="flex-1">
          <div className="bg-[#f2f0f1] mb-2 w-full h-[198px] lg:h-[320px]">
            <img
              src="./klechati.svg"
              alt="CHECKERED SHIRT"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="mb-1 font-medium text-[14px] lg:text-[16px]">Chekcered Shirt</h4>
          <div className="flex items-center gap-1 mb-1">
            <img src="./4.5.svg" alt="Rating" className="h-4" />
            <span className="text-[12px] lg:text-[14px]">4.5/<span className="text-[#00000099]">5</span></span>
          </div>
          <p className="font-bold text-[20px] lg:text-[22px]">$180</p>
        </div>
        <div className="flex-1">
          <div className="bg-[#f2f0f1] mb-2 w-full h-[198px] lg:h-[320px]">
            <img
              src="./baseballtee.svg"
              alt="Black T-shirt"
              className="w-full h-full lg:h-[300px] object-contain"
            />
          </div>
          
          <h4 className="mb-1 font-medium text-[14px] lg:text-[16px]">Sleeve Striped T-Shirt</h4>
          <div className="flex items-center gap-1 mb-1">
            <img src="./4.5.svg" alt="Rating" className="h-4" />
            <span className="text-[12px] lg:text-[14px]">4.5/<span className="text-[#00000099]">5</span></span>
          </div>
          <div className="lg:flex lg:gap-[15px]">
          <p className="font-bold text-[20px] lg:text-[22px]">$240</p>
          <span className="text-[20px] text-gray-400 line-through">$260</span>
          <div className="bg-red-100 px-2 py-0.5 rounded-full lg:w-[45px] lg:h-[25px] font-medium text-[12px] text-red-500">
              -30%
            </div>
            </div>

        </div>

        {/* Add more product cards like above */}
      </div>

      <div className="mt-6 lg:mt-10 text-center">
        <button className="lg:px-6 lg:py-2 lg:border lg:border-black lg:rounded-full font-medium text-[14px] lg:text-[16px] underline lg:no-underline">
          View All
        </button>
      </div>
    </div>
  );
};
export default NewArrivals