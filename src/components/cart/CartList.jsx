import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./CartList.css";
import EmptyCart from "./EmptyCart";

const CartList = () => {
  const cartItems = useSelector((store) => store.cart);
  console.log(cartItems);

  cartItems.map((item) => console.log(item));

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
