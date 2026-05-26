import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./CartList.css";
import EmptyCart from "./EmptyCart";

const CartList = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <>
      <div className="cart-list cart-content">
        {cartItems.length == 0 ? (
          <EmptyCart />
        ) : (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        )}
      </div>
    </>
  );
};

export default CartList;
