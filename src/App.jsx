import React from "react";
import DressStyle from "./components/DressStyle/DressStyle";
import Hero from "./components/Hero/Hero";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import TopSelling from "./components/TopSelling/TopSelling";
import Header from "./components/Header/Header";
import HappyCustomers from "./components/HappyCustomers/HappyCustomers";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./View/Home";
import ProductDetail from "./ProductDetail/ProductDetail";
import Register from "./components/Register/Register";
import LogIn from "./Login/Login";
import SignupSuccess from "./components/Register/Success";
import "./global.css";
import Casual from "./Casual/Casual";
import { casualCloth } from "./data/data";
import "./fonts.css";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "register", element: <Register /> },
      { path: "success", element: <SignupSuccess /> },
      { path: "login", element: <LogIn /> },
      { path: "casual", element: <Casual casualClothes={casualCloth} /> },
    ],
  },
]);

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
