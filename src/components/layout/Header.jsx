import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartCount = cartItems.length;

  return (
    <>
      {/* desktop header */}
      <div className="desktop-header">
        <header>
          <div className="left-header">
            <Link to="/">
              <h1 className="logo">ShopeEase</h1>
            </Link>
            <ul className="navigations">
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/products">
                <li>Products</li>
              </Link>
              <Link to="/login-signup">
                <button className="btn login-signup">Login / Sign Up</button>
              </Link>
            </ul>
          </div>
          <div className="icons">
            <Link to="/wishlist">
              <i className="bi bi-heart-fill"></i>
            </Link>
            <Link to="/profile">
              <i className="bi bi-person-circle"></i>
            </Link>
            <Link to="/cart">
              <i className="bi bi-cart position-relative">
                <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                  {cartCount}
                </span>
              </i>
            </Link>
          </div>
         
        </header>
      </div>

      {/* mobile header */}
      <div className="mobile-header">
        <div className="mobile-top-header">
          <Link to="/">
            <h1 className="logo">ShopEase</h1>
          </Link>

          <div className="mobile-top-icons">
            <div className="icons">
              <Link to="/wishlist">
                <i className="bi bi-heart-fill"></i>
              </Link>

              <Link to="/cart">
                <i className="bi bi-cart position-relative">
                  <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    {cartCount}
                  </span>
                </i>
              </Link>
            </div>
          </div>
        </div>

        <nav className="mobile-bottom-nav">
          <Link to="/">
            <div className="mobile-nav-item">
              <i className="bi bi-house-door-fill"></i>
              <span>Home</span>
            </div>
          </Link>

          <Link to="/products">
            <div className="mobile-nav-item">
              <i className="bi bi-grid-fill"></i>
              <span>Products</span>
            </div>
          </Link>

          <Link to="/login-signup">
            <div className="mobile-nav-item">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </div>
          </Link>

          <Link to="/profile">
            <div className="mobile-nav-item">
              <i className="bi bi-person-circle"></i>
              <span>Profile</span>
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
