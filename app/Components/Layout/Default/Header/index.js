import React, { useState } from "react";
import { Link } from "@remix-run/react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
    <nav className=" position-relative navbar navbar-expand-lg navbar-light bg-light d-flex align-items-center">
      <Link className="navbar-brand ps-3" to="/">
        <img
          src="img/logo4.png"
          alt=""
          className="img-fluid logo-small logo"
        />
      </Link>
      <button
        className="navbar-toggler me-3"
        type="button"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`ps-5 scroll-mobile-menu collapse navbar-collapse justify-content-center ${
          isNavOpen ? "show" : ""
        }`}
      >
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Trang Chủ <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Về Chúng Tôi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Tính Toán
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dieu-khoan-su-dung">
              Điều Khoản Sử Dụng
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;
