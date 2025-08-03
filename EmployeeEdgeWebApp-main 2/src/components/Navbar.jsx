import React, { useState, useContext } from "react";
import { context } from "../ContextApi";
import { useNavigate, useLocation } from "react-router-dom";
import LoginType from "../datatype/LoginType";

export default () => {
  const { userData, setUserData } = useContext(context);

  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let buttonContent;
  if (location.pathname === "/") {
    buttonContent = "Login";
  } else {
    buttonContent = "Logout";
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = () => {
    if (location.pathname === "/") {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  const isValidPath = () => {
    if (location.pathname === "/login" || location.pathname === "/register")
      return false;
    return true;
  };

  const getDashboardTitle = () => {
    if (userData.userType === LoginType.EMPLOYEE) {
      return "Employee Dashboard";
    } else if (userData.userType === LoginType.ADMIN) {
      return "Admin Dashboard";
    }
    return "";
  };

  const getLogoLink = () => {
    if (userData.userType != "") {
      return "/home";
    }
    return "/";
  };

  return userData.userType === LoginType.ADMIN ? null : (
    <nav className="navbar">
      <div className="logo">
        <a href={getLogoLink()}>
          {location.pathname === "/" ? "" : "EmployeeEdge"}
        </a>
        {getDashboardTitle() && (
          <span className="dashboard-title">{getDashboardTitle()}</span>
        )}
      </div>
      <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
        {location.pathname === "/" ? (
          <li>
            <button
              className={"logout-btn"}
              onClick={() => navigate("/register")}
            >
              {"Register"}
            </button>
          </li>
        ) : null}
        {isValidPath() ? (
          <li>
            <button
              className={buttonContent === "Login" ? "login-btn" : "logout-btn"}
              onClick={handleButtonClick}
            >
              {buttonContent}
            </button>
          </li>
        ) : null}
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>
    </nav>
  );
};
