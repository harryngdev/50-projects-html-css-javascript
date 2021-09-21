import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo/logo.png";
import { BarsOutlined } from "@ant-design/icons";
import * as Config from "./../../constants/Config";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <Link to={`/${Config.HOME_PAGE}`}>
              <img src={logo} alt="logo" />
              nvan.ha
            </Link>
          </div>

          <nav className={`header-link ${toggleMenu ? "show-menu" : ""}`}>
            <div className="header-link-wrap">
              <div className="header-link-item">
                <Link
                  to={`/${Config.HOME_PAGE}`}
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </Link>
              </div>
              <div className="header-link-item">
                <a href="#projects" onClick={() => setToggleMenu(false)}>
                  Projects
                </a>
              </div>
              <div className="header-link-item">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </div>
            </div>
          </nav>

          <button id="toggle-menu" onClick={() => setToggleMenu(!toggleMenu)}>
            <BarsOutlined />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
