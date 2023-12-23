import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <div>
      <>
        <div class="navbar">
          <a href="/" id="onh">
            Contact us
          </a>
          <span className="separator"> | </span>
          <a href="/" id="onh">
            Log in
          </a>{" "}
          <i class="fa-solid fa-angles-right" id="angle"></i>
        </div>
        {/* <button id="menu-toggle">
          <i class="fa-solid fa-bars"></i>
        </button> */}
        <div className="header">
          <div className="logo">
            <a href="/">
              <img
                src="https://th.bing.com/th/id/OIP.QodLrMww1AyoW3um96niMgHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7images/logo.jpg"
                alt="Error Loading img"
                height="60px"
                width="60px"
              />
              {props.title}
            </a>
          </div>
          <div className="links1">
            <a href="/">
              {" "}
              <i class="ri-home-line"></i> Home
            </a>
            <a href="/">
              <i class="ri-customer-service-line"></i> Services
            </a>
            <a href="/">
              <i class="ri-product-hunt-line"></i> Products
            </a>
            <a href="/">
              <i class="ri-hammer-line"></i> Tools
            </a>
            <a href="/">
              <i class="ri-survey-line"></i> Sustainability
            </a>
          </div>
          <div className="signup-button">
            <a href="/" id="demo">
              Request demo
            </a>{" "}
            <span className="separator"> | </span>
            <button className="signup-btn">Sign up</button>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
