import React from 'react'

const TopSelling = () => {
  return (
    
    
    <div className="mx-auto mt-[32px] px-4 max-w-[390px]">
      <div className='border-gray-300 border-t-[2px]'></div>
    <h2 className="mb-6 font-bold text-[32px] text-center">TOP SELLING</h2>
    
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
          <img 
            src="./shirt.png" 
            alt="stripedshirt" 
            className="w-full h-full object-contain"
          />
        </div>
        <h4 className="mb-1 w-[190px] font-medium text-[14px]">Vertical Striped Shirt</h4>
        <div className="flex items-center gap-1 mb-1">
          <img src="./5.svg" alt="Rating" className="h-4"/>
          <span className="text-[12px]">5.0/5</span>
        </div>
      
        <div className="flex items-center gap-2">
          <p className="font-bold text-[20px]">$212</p>
          <span className="text-[20px] text-gray-400 line-through">$235</span>
          <div className="bg-red-100 px-2 py-0.5 rounded-full font-medium text-[12px] text-red-500">
            -20%
          </div>
        </div>
      </div>
      
 
      <div className="flex-1">
        <div className="bg-[#f2f0f1] mb-2 w-full h-[198px]">
          <img 
            src="./orangetshirt.png" 
            alt="orange shirt" 
            className="w-full h-full object-contain"
          />
        </div>
        
      <h4 className="mb-1 w-[210px] font-medium text-[14px]">Courage Graphic T-shirt</h4>
        <div className="flex items-center gap-1 mb-1">
          <img src="./4.svg" alt="Rating" className="h-4"/>
          <span className="text-[12px]">4.0/5</span>
        </div>
       <p className='font-bold text-[20px]'>$145</p>
        
      </div>
    </div>
    
    <div className="mt-6 text-center">
      <button className="font-medium text-[14px] underline">View All</button>
    </div>
  </div>
  )
}

export default TopSelling
