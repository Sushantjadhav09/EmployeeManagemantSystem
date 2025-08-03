import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "./components/css/index.css";
import "./components/css/homepage.css";
import "./components/css/loginRegisterPage.css";
import "./components/css/navbar.css";
import "./components/css/employeeDashboard.css";
import "./components/css/adminDashboard.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);
