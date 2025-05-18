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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
