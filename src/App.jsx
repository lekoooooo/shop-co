import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./View/Home";

import ProductDetail from "./ProductDetail/ProductDetail";
import Register from "./components/Register/Register";
import LogIn from "./Login/Login";
import SignupSuccess from "./components/Register/Success";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductDetail /> },
      { path: "register", element: <Register /> },
      { path: "success", element: <SignupSuccess /> },
      { path: "login", element: <LogIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
