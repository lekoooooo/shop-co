const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] mx-auto mt-[100px] px-6 lg:px-20 py-[60px] lg:py-20 max-w-[392px] lg:max-w-full font-medium text-[#000000cc] text-sm">
      <div className="lg:mt-[50px] mb-6 lg:max-w-full lg:text-center">
        <h2 className="mb-2 font-extrabold text-[24px] text-black lg:text-[33px] lg:text-start">
          SHOP.CO
        </h2>
        <p className="lg:max-w-[250px] lg:text-[#00000099] lg:text-[14px] lg:text-start">
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
      </div>

      <hr className="hidden lg:block mb-8 border-[#0000001A]" />

      <div className="flex gap-4 mb-8">
        <button className="cursor-pointer">
          <img src="/twitter.svg" alt="Twitter" />
        </button>
        <button className="cursor-pointer">
          <img src="/fb.svg" alt="Facebook" />
        </button>
        <button className="cursor-pointer">
          <img src="/ig.svg" alt="Instagram" />
        </button>
        <button className="cursor-pointer">
          <img src="/git.svg" alt="GitHub" />
        </button>
      </div>

      <div className="lg:hidden gap-[47px] grid grid-cols-2 mb-[40px]">
        <div>
          <h4 className="mb-[16px] font-bold text-black">COMPANY</h4>
          <ul className="space-y-2 text-[#00000099]">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-bold text-black">HELP</h4>
          <ul className="space-y-2 text-[#00000099]">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-bold text-black">FAQ</h4>
          <ul className="space-y-2 text-[#00000099]">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-bold text-black">RESOURCES</h4>
          <ul className="space-y-2 text-[#00000099]">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Links Section - Desktop (matches image exactly) */}
      <div className="hidden lg:block mb-[40px]">
        <div className="gap-8 grid grid-cols-4">
          <div>
            <h4 className="mb-4 font-bold text-black">COMPANY</h4>
            <ul className="space-y-2 text-[#00000099]">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-black">HELP</h4>
            <ul className="space-y-2 text-[#00000099]">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-black">FAQ</h4>
            <ul className="space-y-2 text-[#00000099]">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-black">RESOURCES</h4>
            <ul className="space-y-2 text-[#00000099]">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mb-5 border-[#0000001A]" />

      {/* Bottom Copyright */}
      <div className="">
        <p className="text-[#00000099] text-[14px] text-center">
          Shop.co @ 2000-2023, All Rights Reserved
        </p>
        <div className="flex justify-center gap-[5px]">
          <img src="/visa.svg" alt="Visa" />
          <img src="/mastercard.svg" alt="Mastercard" />
          <img src="/paypal.svg" alt="PayPal" />
          <img src="/Apay.svg" alt="Apple Pay" />
          <img src="/Gpay.svg" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
