import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const { authUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  const showProfileDetails = () => {
    if (!authUser) return;
    alert(`Name: ${authUser.name}`);
    alert(`Email: ${authUser.email}`);
  };

  return (
    <div className="relative mx-auto max-w-[391px] lg:max-w-[1920px]">
      {showBanner && (
        <div className="flex justify-between items-center bg-black px-4 lg:px-8 max-w-[391px] lg:max-w-[1920px] h-[34px] text-[12px] text-white text-center">
          <div className="flex-1 text-center">
            <p className="inline mx-auto font-[satoshi]">
              Sign up and get 20% off to your first order.
              <Link to="/register">
                <button className="ml-1 font-[satoshi] underline cursor-pointer">
                  Sign Up Now
                </button>
              </Link>
            </p>
          </div>
          <button
            onClick={handleBannerClose}
            className="flex-shrink-0 ml-2 cursor-pointer"
          >
            <img src="/x.svg" alt="Close banner" className="w-3 h-3" />
          </button>
        </div>
      )}

      <header>
        <div className="flex justify-between items-center px-[16px] lg:px-8 py-[10px] lg:py-4 border-b">
          <div className="flex items-center gap-[54px] lg:gap-12 lg:ml-[100px]">
            <button className="lg:hidden" onClick={toggleMenu}>
              <img src="/burger.svg" alt="Menu" className="w-6 h-6" />
            </button>

            <Link to="/" className="font-bold text-[25px]">
              SHOP.CO
            </Link>

            <nav className="hidden relative lg:flex items-center gap-8 text-[16px] text-black">
              <div className="relative">
                <button
                  onClick={() => setDesktopSubmenuOpen(!desktopSubmenuOpen)}
                  className="flex items-center gap-1"
                >
                  Shop
                  <img
                    src="/arrowD.svg"
                    className={`w-4 h-4 mt-[2px] transition-transform ${
                      desktopSubmenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {desktopSubmenuOpen && (
                  <ul className="top-full left-0 z-10 absolute space-y-2 bg-white shadow-md mt-2 px-4 py-2 rounded-md w-[180px] font-[satoshi]">
                    <li>
                      <Link to="/product" className="block hover:underline">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/NewArrivals" className="block hover:underline">
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link to="/bestSellers" className="block hover:underline">
                        Best Sellers
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link to="/sale" className="font-[satoshi] hover:underline">
                On Sale
              </Link>
              <Link
                to="/newArrivals"
                className="block font-[satoshi] hover:underline"
              >
                New Arrivals
              </Link>
              <Link to="/brands" className="font-[satoshi] hover:underline">
                Brands
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex flex-1 mx-12 max-w-[600px]">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full font-[satoshi]">
              <img src="/search.svg" className="mr-2 w-5 h-5" alt="Search" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <div>
              {" "}
              <Link to="/cart" className="cursor-pointer">
                <img src="/cart.svg" alt="Cart" className="w-6 h-6" />
              </Link>
            </div>
            <div>
              {authUser ? (
                <div
                  className="flex items-center gap-2 cursor-pointer profile"
                  onClick={showProfileDetails}
                  title="View Profile Details"
                >
                  <Link to="/profile" className="flex items-center gap-2">
                    <img src="/profile.svg" alt="Profile" className="w-6 h-6" />
                    <span>{authUser.name}</span>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      logout();
                    }}
                    className="bg-red-500 ml-2 px-2 py-1 rounded font-[satoshi] text-white text-sm"
                    title="Logout"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <Link to="/login">
                    <img src="/profile.svg" alt="profile" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden z-50 fixed top-0 left-0 h-full w-full max-w-[390px] bg-white overflow-y-auto transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2">
            <img src="/Close.svg" alt="Close" className="w-6 h-6" />
          </button>
        </div>

        <div className="px-4">
          <nav>
            <ul className="space-y-6">
              <li>
                <Link
                  to="/"
                  className="block py-2 font-medium text-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 font-medium text-gray-600 text-lg"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>

              <li>
                <div className="flex justify-between items-center py-2 text-gray-600">
                  <span className="font-medium text-lg">Shop</span>
                  <button
                    onClick={() => toggleSubmenu("shop")}
                    className="p-1 transition-transform"
                  >
                    <img
                      src="/arrowD.svg"
                      alt="Toggle"
                      className={`w-5 h-5 transform ${
                        openSubmenu === "shop" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {openSubmenu === "shop" && (
                  <ul className="space-y-3 mt-2 pl-6 text-gray-600">
                    <li>
                      <Link
                        to="/product"
                        className="block py-1 text-base"
                        onClick={toggleMenu}
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/NewArrivals"
                        className="block py-1 text-base"
                        onClick={toggleMenu}
                      >
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/best-sellers"
                        className="block py-1 text-base"
                        onClick={toggleMenu}
                      >
                        Best Sellers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/testimonials"
                  className="block py-2 font-medium text-gray-600 text-lg"
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
              </li>

              <li className="pt-4">
                <Link
                  to="/register"
                  className="flex justify-center items-center bg-black py-3 rounded-lg w-full max-w-[227px] h-[52px] font-bold text-white text-lg"
                  onClick={toggleMenu}
                >
                  Sign Up Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
