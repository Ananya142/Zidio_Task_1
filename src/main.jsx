import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// 👇 import Toastify CSS and container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <ToastContainer /> {/* Toast messages will appear here */}
    </>
  </StrictMode>
);
