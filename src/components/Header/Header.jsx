


 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [openSubmenu, setOpenSubmenu] = useState(null);
  
    const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) setOpenSubmenu(null); 
    };
    const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);
  
    const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
   };


  return (
    <div className='relative m-auto max-w-[390px] lg:max-w-full'>
    {/* Top Banner */}
    <div className='flex justify-center items-center bg-black px-4 lg:px-8 h-[34px] text-[12px] text-white text-center lg:'>
      <p>Sign up and get 20% off to your first order. <span className='underline cursor-pointer'>Sign Up Now</span></p>
      <button className='hidden lg:block'>
        <img src="./Close.svg" alt="Close banner" className='w-3 h-3' />
      </button>
    </div>
  
    {/* Header */}
    <header>
      <div className='flex justify-between items-center px-[16px] lg:px-8 py-[10px] lg:py-4 border-b'>
        {/* Left: Logo + Navigation */}
        <div className='flex items-center gap-[16px] lg:gap-12 lg:ml-[100px]'>
          <h2 className='font-bold text-[25px]'>SHOP.CO</h2>
  
          {/* Desktop Navigation */}
          <nav className='hidden relative lg:flex items-center gap-8 text-[16px] text-black'>
  <div className='relative'>
    <button 
      onClick={() => setDesktopSubmenuOpen(!desktopSubmenuOpen)} 
      className='flex items-center gap-1'
    >
      Shop
      <img src="./arrowD.svg" className={`w-4 h-4 mt-[2px] transition-transform ${desktopSubmenuOpen ? 'rotate-180' : ''}`} />
    </button>

    {desktopSubmenuOpen && (
      <ul className='top-full left-0 z-10 absolute space-y-2 bg-white shadow-md mt-2 px-4 py-2 rounded-md w-[180px]'>
        <li><a href="#" className='hover:underline'>All Products</a></li>
        <li><a href="#" className='hover:underline'>New Arrivals</a></li>
        <li><a href="#" className='hover:underline'>Best Sellers</a></li>
      </ul>
    )}
  </div>

  <a href="#" className='hover:underline'>On Sale</a>
  <a href="#" className='hover:underline'>New Arrivals</a>
  <a href="#" className='hover:underline'>Brands</a>
</nav>
        </div>
  
        {/* Center: Search bar */}
        <div className='hidden lg:flex flex-1 mx-12 max-w-[600px]'>
          <div className='flex items-center bg-gray-100 px-4 py-2 rounded-full w-full'>
            <img src="./search.svg" className='mr-2 w-5 h-5' alt="Search" />
            <input
              type="text"
              placeholder="Search for products..."
              className='bg-transparent outline-none w-full text-sm'
            />
          </div>
        </div>
  
        {/* Right: Icons */}
        <div className='flex items-center gap-4 lg:gap-6'>
          <button className='lg:hidden' onClick={toggleMenu}>
            <img src="./burger.svg" alt="Menu" className='w-6 h-6' />
          </button>
          <button className='hidden lg:block'><img src="./cart.svg" alt="Cart" className='w-6 h-6' /></button>
          <button className='hidden lg:block'><img src="./profile.svg" alt="Profile" className='w-6 h-6' /></button>
        </div>
      </div>
    </header>
    {isMenuOpen && (
  <div className='lg:hidden z-50 fixed inset-0 bg-white max-w-[390px] overflow-y-auto'>
    <div className='flex justify-end p-4'>
      <button onClick={toggleMenu} className='p-2'>
        <img src="./Close.svg" alt="Close" className='w-6 h-6' />
      </button>
    </div>

    <div className='px-4'>
      <nav>
        <ul className='space-y-6'>
          <li><a href="#" className='block py-2 font-medium text-lg'>Home</a></li>
          <li><a href="#" className='block py-2 font-medium text-gray-600 text-lg'>About</a></li>

          {/* Shop with submenu toggle */}
          <li>
            <div className='flex justify-between items-center py-2 text-gray-600'>
              <span className='font-medium text-lg'>Shop</span>
              <button 
                onClick={() => toggleSubmenu('shop')}
                className='p-1 transition-transform'
              >
                <img 
                  src="./arrowD.svg" 
                  alt="Toggle" 
                  className={`w-5 h-5 transform ${openSubmenu === 'shop' ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
            {openSubmenu === 'shop' && (
              <ul className='space-y-3 mt-2 pl-6 text-gray-600'>
                <li><a href="#" className='block py-1 text-base'>All Products</a></li>
                <li><a href="#" className='block py-1 text-base'>New Arrivals</a></li>
                <li><a href="#" className='block py-1 text-base'>Best Sellers</a></li>
              </ul>
            )}
          </li>

          {/* Add more links as needed */}
          <li><a href="#" className='block py-2 font-medium text-gray-600 text-lg'>Testimonials</a></li>

          {/* CTA */}
          <li className='pt-4'>
            <button className='bg-black py-3 rounded-lg w-full max-w-[227px] h-[52px] font-bold text-white text-lg'>
              Sign Up Now
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)}
  </div>
  )
}

export default Header;