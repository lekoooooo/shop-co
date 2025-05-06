// import React from 'react'

// const NewArrivals = () => {
//   return (
//     <div className="mx-auto max-w-[390px]">
//     <h2 className="mb-6 font-bold text-[32px] text-center">NEW ARRIVALS</h2>
    
//     <div className="flex gap-4 px-4">

//       <div className="flex-1 gap-[10px]">
//         <img src="./blacktee.png" alt="blackTee" className="bg-[#f2f0f1] mb-2 w-full max-w-[198px]"/>
//         <h4 className="mb-1 font-medium text-[14px]">T-SHIRT WITH TAPE DETAILS</h4>
//         <div className="flex items-center gap-1 mb-1">
//           <img src="./4.5.svg" alt="Rating" className="h-4"/>
//           <span className="text-[12px]">4.5/5</span>
//         </div>
//         <p className="font-bold text-[20px]">$120</p>
//       </div>
      

//       <div className="flex-1">
//         <img src="./skinnyjeans.svg" alt="Skinny Jeans" className="mb-2 w-full max-w-[198px] object-cover"/>
//         <h4 className="mb-1 font-medium text-[14px]">Skinny Fit Jeans</h4>
//         <div className="flex items-center gap-1 mb-1">
//           <img src="./3.5.svg" alt="Rating" className="h-4"/>
//           <span className="text-[12px]">3.5/5</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <p className="font-bold text-[20px]">$240</p>
//           <span className="text-[20px] text-gray-400 line-through">$260</span>
//           <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
//             -20%
//           </div>
//         </div>
//       </div>
//     </div>
    
//     <div className="mt-6 text-center">
//       <button  className="max-w-[358px] font-[500] text-[14px]">View All</button>
//     </div>
//   </div>
//   )
// }

// export default NewArrivals



import React from 'react'

const NewArrivals = () => {
  return (
    <div className="mx-auto px-4 max-w-[390px]">
      <h2 className="mb-6 font-bold text-[32px] text-center">NEW ARRIVALS</h2>
      
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
            <img 
              src="./blacktee.png" 
              alt="Black T-shirt" 
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="mb-1 w-[190px] font-medium text-[14px]">T-SHIRT WITH TAPE DETAILS</h4>
          <div className="flex items-center gap-1 mb-1">
            <img src="./4.5.svg" alt="Rating" className="h-4"/>
            <span className="text-[12px]">4.5/5</span>
          </div>
          <p className="font-bold text-[20px]">$120</p>
        </div>
        
   
        <div className="flex-1">
          <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
            <img 
              src="./skinnyjeans.svg" 
              alt="Skinny Jeans" 
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="mb-1 font-medium text-[14px]">Skinny Fit Jeans</h4>
          <div className="flex items-center gap-1 mb-1">
            <img src="./3.5.svg" alt="Rating" className="h-4"/>
            <span className="text-[12px]">3.5/5</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-[20px]">$240</p>
            <span className="text-[20px] text-gray-400 line-through">$260</span>
            <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
              -20%
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <button className="font-medium text-[14px] underline">View All</button>
      </div>
    </div>
  )
}

export default NewArrivals