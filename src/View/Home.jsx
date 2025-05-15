// import Header from "../components/Header/Header";
// import Hero from "../components/Hero/Hero";
// import NewArrivals from "../components/NewArrivals/NewArrivals";
// import TopSelling from "../components/TopSelling/TopSelling";
// import DressStyle from "../components/DressStyle/DressStyle";
// import HappyCustomers from "../components/HappyCustomers/HappyCustomers";
// import StayUpDated from "../components/StayUpDated/StayUpDated";
// import Footer from "../components/Footer/Footer";
// import ProductDetail from "../ProductDetail/ProductDetail";

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <NewArrivals />
//       <TopSelling />
//       <DressStyle />
//       <HappyCustomers />
//       <StayUpDated />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import TopSelling from "../components/TopSelling/TopSelling";
import DressStyle from "../components/DressStyle/DressStyle";
import HappyCustomers from "../components/HappyCustomers/HappyCustomers";
import StayUpDated from "../components/StayUpDated/StayUpDated";
import Footer from "../components/Footer/Footer";
import { products } from "../data/data";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals products={products} />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <StayUpDated />
      <Footer />
    </div>
  );
};

export default Home;
