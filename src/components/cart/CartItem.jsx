import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(cartAction.removeFromCart(item));
  };
  return (
    <>
      <div className="cart-card">
        <div className="cart-card-img">
          <img src={item.thumbnail} alt="title" />
        </div>

        <div className="cart-card-details">
          <h2>{item.title}</h2>

          <p className="cart-card-category">{item.category}</p>

          <h3>₹ {item.price}</h3>

          <div className="cart-card-actions">
            <div className="quantity-cont">
              <button>-</button>

              <span>1</span>

              <button>+</button>
            </div>

            <button className="remove-btn" onClick={handleRemove}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
