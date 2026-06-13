import { useDispatch, useSelector } from "react-redux";
import "./ProductInfo.css";
import { cartAction } from "../../../store/cart";
import { wishlistAction } from "../../../store/wishlist";
import Details from "../extra info/Details";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const product = useSelector((store) => store.products.selectedProduct);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const { wishlist } = useSelector((store) => store.wishlist);
  const { isAuthenticated } = useSelector((store) => store.user);

  const nav = useNavigate();

  if (!product) return null;

  const dispatch = useDispatch();

  const isAddedToCart = cartItems.some((item) => {
    return item.id === product.id;
  });

  const isWishlisted = wishlist.some((item) => {
    return item.id === product.id;
  });

  const handleCart = () => {
    if (isAddedToCart) {
      toast.error("removed item");
      dispatch(cartAction.removeFromCart(product));
    } else {
      toast.success("added successfully");
      dispatch(cartAction.addToCart(product));
    }
  };

  const handleWishlist = () => {
    if (!isAuthenticated) {
      nav("/login-signup");
      return;
    }
    if (isWishlisted) {
      toast.error("removed item");
      dispatch(wishlistAction.removeFromWishlist(product));
    } else {
      toast.success("added successfully");
      dispatch(wishlistAction.addToWishlist(product));
    }
  };

  const category =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <div className="rating">
        <i className="bi bi-star-fill"></i> {product.rating}
      </div>

      <p className="meta">
        Brand: <span> {product.brand}</span> | Category: <span>{category}</span>
      </p>

      <h2 className="price">{product.price}</h2>

      <p className="description">{product.description}</p>

      <div className="action-buttons">
        <button
          className={isAddedToCart ? "remove-cart btn-danger" : "add-cart"}
          onClick={handleCart}
        >
          {isAddedToCart ? (
            <>
              <i className="bi bi-trash"></i> Remove Cart
            </>
          ) : (
            <>
              <i className="bi bi-cart"></i> Add To Cart
            </>
          )}
        </button>
        <button className="wishlist " onClick={handleWishlist}>
          {isWishlisted ? (
            <>
              <i className="bi bi-trash-fill"></i> Remove
            </>
          ) : (
            <>
              <i className="bi bi-heart"></i> Wishlist
            </>
          )}
        </button>
      </div>

      <div className="product-benefits">
        <div>
          <i className="bi bi-truck"></i> Free Delivery
        </div>
        <div>
          <i className="bi bi-box-fill"></i> {product.shippingInformation}
        </div>
        <div>
          <i className="bi bi-shield-fill"></i> {product.warrantyInformation}
        </div>
        <div>
          <i className="bi bi-arrow-repeat"></i> {product.returnPolicy}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
