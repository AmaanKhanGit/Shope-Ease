import { useState } from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LuSquareMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isActive, setActive] = useState(false); //& for navigation toggle

  const handleOnClick = () => {
    setActive((prev) => !prev);
  };

  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartCount = cartItems.length;

  return (
    <>
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <h1 className="logo">ShopeEase</h1>
          </Link>
        </div>
        <nav className="navCont">
          <ul className="navigations">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/products">
              <li>Products</li>
            </Link>

            <Link to="/about-us">
              <li>About Us</li>
            </Link>

            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
          </ul>

          <ul className={`nav-mobile ${isActive && "active"}`}>
            <Link to="/" onClick={handleOnClick}>
              <li>Home</li>
            </Link>

            <Link to="/products" onClick={handleOnClick}>
              <li>Products</li>
            </Link>

            <Link to="/about-us" onClick={handleOnClick}>
              <li>About Us</li>
            </Link>

            <Link to="/contact-us" onClick={handleOnClick}>
              <li>Contact Us</li>
            </Link>
          </ul>

          <LuSquareMenu className="menu-bar" onClick={handleOnClick} />
        </nav>
        <div className="icons">
          <i className="bi bi-person-circle"></i>
          <Link to="/cart">
            <i className="bi bi-cart position-relative">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            </i>
          </Link>
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
