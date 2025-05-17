import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./AuthContext/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
      <SpeedInsights />
    </AuthProvider>
  </QueryClientProvider>
);
