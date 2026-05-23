import { useDispatch } from "react-redux";
import "./Product.css";
import { cartAction } from "../store/cart";
import { useState } from "react";

const Product = ({ product }) => {
  const [isAdded, setAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartAction.addToCart(product));
    setAdded(true);
  };

  const handleRemove = () => {
    dispatch(cartAction.removeFromCart(product));
    setAdded(false);
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
