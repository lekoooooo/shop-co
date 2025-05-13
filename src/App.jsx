import DressStyle from "./components/DressStyle/DressStyle";
import Footer from "./components/Footer/Footer";
import HappyCustomers from "./components/HappyCustomers/HappyCustomers";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import StayUpDated from "./components/StayUpDated/StayUpDated";
import TopSelling from "./components/TopSelling/TopSelling";

const App = () => {
  return (
    <div className="h-[4461px]">
      <Header />
      <Hero />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <StayUpDated />
      <Footer />
    </div>
  );
};

export default App;
