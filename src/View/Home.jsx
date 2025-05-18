// import Header from "../components/Header/Header";
// import Hero from "../components/Hero/Hero";
// import NewArrivals from "../components/NewArrivals/NewArrivals";
// import TopSelling from "../components/TopSelling/TopSelling";
// import DressStyle from "../components/DressStyle/DressStyle";

// import StayUpDated from "../components/StayUpDated/StayUpDated";
// import Footer from "../components/Footer/Footer";
// import { products } from "../data/data";
// import EmblaCarousel from "embla-carousel";

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <NewArrivals products={products} />
//       <TopSelling />
//       <DressStyle />
//       <EmblaCarousel />
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
import StayUpDated from "../components/StayUpDated/StayUpDated";
import Footer from "../components/Footer/Footer";
import { products } from "../data/data";
import { EmblaCarousel } from "../components/EmblaCarousel/EmblaCarousel";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals products={products} />
      <TopSelling />
      <DressStyle />
      <EmblaCarousel />
      <StayUpDated />
      <Footer />
    </div>
  );
};

export default Home;
