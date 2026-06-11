import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { cartAction } from "../../store/cart";
import { useState } from "react";
import { wishlistAction } from "../../store/wishlist";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const { wishlist } = useSelector((store) => store.wishlist);
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);

  const navigate = useNavigate();

  const isAdded = cartItems.some((item) => {
    return item.id === product.id;
  });

  let isWishlisted = wishlist.some((wish) => {
    return wish.id === product.id;
  });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartAction.addToCart(product));
  };

  const handleRemove = () => {
    dispatch(cartAction.removeFromCart(product));
  };

  const handleWishlist = () => {
    if (!isAuthenticated) {
      navigate("/login-signup");
    } else {
      if (isWishlisted) {
        dispatch(wishlistAction.removeFromWishlist(product));
      } else {
        dispatch(wishlistAction.addToWishlist(product));
        isWishlisted = false;
      }
    }
  };

  return (
    <div className="product-card">
      <div className="product-img">
        <i
          className={`bi bi-heart${isWishlisted ? "-fill" : ""}`}
          onClick={handleWishlist}
        ></i>
        <img src={encodeURI(product.thumbnail)} alt={product.title} />
      </div>
      <div className="product-content">
        <h2 className="title">{product.title}</h2>
        <p className="disc">{product.description}</p>
        <p className="price">{product.price}</p>
        <div className="product-btn-cont">
          <button
            className="btn"
            style={{ backgroundColor: "var(--mainColor)", color: "white" }}
            onClick={() =>
              navigate(
                `/product-details/${product.id}-${product.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`,
              )
            }
          >
            View details
          </button>
          {isAdded ? (
            <button className="btn btn-danger" onClick={handleRemove}>
              Remove
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
