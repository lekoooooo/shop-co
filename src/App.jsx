import React from "react";
import DressStyle from "./components/DressStyle/DressStyle";
import Hero from "./components/Hero/Hero";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import TopSelling from "./components/TopSelling/TopSelling";
import Header from "./components/Header/Header";
import HappyCustomers from "./components/HappyCustomers/HappyCustomers";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DressStyle />
      <HappyCustomers />
      <NewArrivals />
      <TopSelling />
    </div>
  );
};

export default App;
