

import React from 'react'

const DressStyle = () => {
  return (
    <div className='flex flex-col gap-[16px] bg-[#F0F0F0] m-auto mt-[50px] max-w-[358px]'>
      <h2 className='m-auto mb-6 max-w-[200px] font-bold text-[32px] text-center'> BROWSE BY DRESS STYLE</h2>
    
      <div className='relative bg-white m-auto rounded-[20px] w-[310px] max-h-[200px] overflow-hidden'>
        <button>
          <img className="justify-center mx-[11.5px] mt-[1px] rounded-[35px] w-full h-full" src="./casual.png" alt="casual" />
          <span className="bottom-6 left-6 absolute mb-[110px] font-bold text-black text-xl">Casual</span>
        </button>
      </div>
      
      <div className='relative bg-white m-auto rounded-[20px] max-w-[310px] max-h-[190px]'>
        <button>
          <img className="w-full h-[190px]" src="./formal.png" alt="formal" />
          <span className="bottom-6 left-6 absolute mb-[110px] font-bold text-black text-xl">Formal</span>
        </button>
      </div> 
      
      <div className='relative bg-white m-auto rounded-[20px] max-w-[310px] max-h-[190px]'>
        <button>
          <img className="w-full h-[190px]" src="./party.png" alt="party" />
          <span className="bottom-6 left-6 absolute mb-[110px] font-bold text-black text-xl">Party</span>
        </button>
      </div> 
      
      <div className='relative bg-white m-auto rounded-[20px] w-[310px] max-h-[190px]'>
        <button>
          <img className="ml-[51px] w-full h-[190px] object-contain" src="./gym.png" alt="gym" />
          <span className="bottom-6 left-6 absolute mb-[110px] font-bold text-black text-xl">Gym</span>
        </button>
      </div>
    </div>
  )
}

export default DressStyle