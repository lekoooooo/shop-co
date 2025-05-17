import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./AuthContext/AuthContext";

import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
    <SpeedInsights />
  </AuthProvider>
);
