import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { cartAction } from "../store/cart";
import { useState } from "react";

const Product = ({ product }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const isAdded = cartItems.some((item) => {
    return item.id === product.id;
  });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartAction.addToCart(product));
  };

  const handleRemove = () => {
    dispatch(cartAction.removeFromCart(product));
  };

  return (
    <div className="product-card">
      <div
        className="product-img"
        style={{
          backgroundImage: `url(${encodeURI(product.thumbnail)})`,
        }}
      ></div>
      <div className="product-content">
        <h2 className="title">{product.title}</h2>
        <p className="disc">{product.description}</p>
        <p className="price">{product.price}</p>
        <div className="product-btn-cont">
          <button
            className="btn"
            style={{ backgroundColor: "var(--mainColor)", color: "white" }}
            onClick={() => console.log("viewed")}
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
