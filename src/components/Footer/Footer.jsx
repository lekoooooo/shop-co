const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] mx-auto px-6 py-[150px] max-w-[392px] font-medium text-[#000000cc] text-sm">
      <div className="mb-6">
        <h2 className="mb-2 font-extrabold text-[24px] text-black">SHOP.CO</h2>
        <p>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <button>
          <img src="./twitter.svg" alt="Twitter" />
        </button>
        <button>
          <img src="./fb.svg" alt="Facebook" />
        </button>
        <button>
          <img src="./ig.svg" alt="Instagram" />
        </button>
        <button>
          <img src="./git.svg" alt="GitHub" />
        </button>
      </div>

      <div className="gap-[47px] grid grid-cols-2 mb-[40px]">
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
            <li>Payment</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-bold text-black">RESOURCES</h4>
          <ul className="space-y-2 text-[#00000099]">
            <li>Free eBook</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="pt-4 border-[#0000001A] border-t">
        <p className="mb-4 text-[#00000099] text-[14px] text-center">
          Shop.co © 2000–2023, All Rights Reserved
        </p>
        <div className="flex justify-center gap-[5px]">
          <img src="./visa.svg" alt="Visa" />
          <img src="./mastercard.svg" alt="Mastercard" />
          <img src="./paypal.svg" alt="PayPal" />
          <img src="./Apay.svg" alt="Apple Pay" />
          <img src="./Gpay.svg" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
