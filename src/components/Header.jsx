import { useState } from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [isActive, setActive] = useState(false); //& for navigation toggle
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setActive((prev) => !prev);
  };

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <header>
        <div>
          <h1 className="logo">Shope Ease</h1>
        </div>
        <nav className="navCont">
          <ul className="navigations">
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className={`nav-mobile ${isActive && "active"}`}>
            <li onClick={handleOnClick}>Home</li>
            <li onClick={handleOnClick}>Products</li>
            <li onClick={handleOnClick}>Services</li>
            <li onClick={handleOnClick}>About Us</li>
            <li onClick={handleOnClick}>Contact Us</li>
          </ul>
          <i
            className="bi bi-menu-button-wide menu-bar"
            onClick={handleOnClick}
          ></i>
        </nav>
        <div className="icons">
          <i className="bi bi-person-circle"></i>
          <i className="bi bi-cart position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {counter}
            </span>
          </i>
        </div>
        <div
          className={`overlay ${isActive && "active"}`}
          onClick={handleOnClick}
        ></div>
      </header>
    </>
  );
};

export default Header;
