import { useDispatch, useSelector } from "react-redux";
import "./Item.css";
import { cartAction } from "../../store/cart";
import { wishlistAction } from "../../store/wishlist";
import toast from "react-hot-toast";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(cartAction.addToCart(item));
    toast.success("Added to cart!");
  };

  const handleRemove = () => {
    toast.error("Removed from wishlist");
    dispatch(wishlistAction.removeFromWishlist(item));
  };

  const handleRemoveCart = () => {
    dispatch(cartAction.removeFromCart(item));
    toast.error("removed from cart");
  };

  const cartItems = useSelector((store) => store.cart.cartItems);

  const isAddedToCart = cartItems.some((cartitem) => {
    return cartitem.id === item.id;
  });

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
            onClick={handleRemove}
          >
            Remove
          </button>
          {isAddedToCart ? (
            <button className="btn btn-danger" onClick={handleRemoveCart}>
              Remove
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleAdd}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
