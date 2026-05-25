import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  return (
    <>
      <div className="cart-cont">
        <CartList />
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
