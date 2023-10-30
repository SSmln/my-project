import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import.meta.env.VITE_PUBLIC_URL;
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter
      basename={import.meta.env.VITE_PUBLIC_URL ? "/" : "/ceami.github.io/"}
    >
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
