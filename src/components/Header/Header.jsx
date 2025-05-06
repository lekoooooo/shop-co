
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) setOpenSubmenu(null); 
    };
  
    const toggleSubmenu = (menu) => {
      setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    return (
        <div className='relative m-auto max-w-[390px]'>

        <div className='bg-black m-auto max-w-[390px] h-[34px] text-[12px] text-white text-center'>
          <p>Sign up and get 20% off to your first order. Sign Up Now</p>
        </div>
  

        <div>
          <header>
            <div className='flex justify-between items-center px-[16px] py-[10px] border-b'>
              <div className='flex items-center gap-[16px]'>
                <button onClick={toggleMenu}>
                  <img src="./burger.svg" alt="Menu" className='w-6 h-6' />
                </button>
                <h2 className='font-bold text-[25px]'>SHOP.CO</h2>
              </div>
  
              <div className='flex gap-4'>
                <button><img src="./search.svg" alt="Search" className='w-6 h-6' /></button>
                <button><img src="./cart.svg" alt="Cart" className='w-6 h-6' /></button>
                <button><img src="./profile.svg" alt="Profile" className='w-6 h-6' /></button>
              </div>
            </div>
          </header>
  
         
          {isMenuOpen && (
  <div className='z-50 fixed inset-0 bg-white'>

  <div className='p-4'>
    <button onClick={toggleMenu} className='p-2'>
      <img src="./Close.svg" alt="Close" className='w-6 h-6' />
    </button>
  </div>
  
  
  <div className='px-4 pt-[72px]'>
    <nav>
      <ul className='space-y-6'>
        <li>
          <a href="#" className='block py-2 font-medium text-lg'>Home</a>
        </li>
        <li>
          <a href="#" className='block py-2 font-medium text-gray-600 text-lg'>About</a>
        </li>
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
        <li>
          <div className='flex justify-between items-center py-2 text-gray-600'>
            <span className='font-medium text-lg'>Services</span>
            <button 
              onClick={() => toggleSubmenu('services')}
              className='p-1 transition-transform'
            >
              <img 
                src="./arrowD.svg" 
                alt="Toggle" 
                className={`w-5 h-5 transform ${openSubmenu === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          {openSubmenu === 'services' && (
            <ul className='space-y-3 mt-2 pl-6 text-gray-600'>
              <li><a href="#" className='block py-1 text-base'>Delivery</a></li>
              <li><a href="#" className='block py-1 text-base'>Returns</a></li>
              <li><a href="#" className='block py-1 text-base'>FAQ</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className='block py-2 font-medium text-gray-600 text-lg'>Testimonials</a>
        </li>
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
      </div>
    );
  };
  
  export default Header;