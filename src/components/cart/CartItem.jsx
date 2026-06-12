import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    toast.error("removed from cart!");
    dispatch(cartAction.removeFromCart(item));
  };

  const handleIncrease = () => {
    dispatch(cartAction.increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(cartAction.decreaseQuantity(item.id));
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

          <h3>$ {item.price}</h3>

          <div className="cart-card-actions">
            <div className="quantity-cont">
              <button onClick={handleDecrease}>-</button>

              <span>{item.quantity}</span>

              <button onClick={handleIncrease}>+</button>
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
