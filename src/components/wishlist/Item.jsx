import { useDispatch, useSelector } from "react-redux";
import "./Item.css";
import { cartAction } from "../../store/cart";
import { wishlistAction } from "../../store/wishlist";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="wishlist-card">
      <div className="wishlist-img">
        <img src={encodeURI(item.thumbnail)} alt={item.title} />
      </div>
      <div className="wishlist-content">
        <h2 className="title">{item.title}</h2>
        <p className="disc">{item.description}</p>
        <p className="price">{item.price}</p>
        <div className="wishlist-btn-cont">
          <button
            className="btn"
            style={{ backgroundColor: "var(--mainColor)", color: "white" }}
            onClick={() => dispatch(wishlistAction.removeFromWishlist(item))}
          >
            Remove
          </button>
          <button
            className="btn btn-success"
            onClick={() => dispatch(cartAction.addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
