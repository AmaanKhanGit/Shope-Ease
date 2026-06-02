import { useSelector } from "react-redux";
import Item from "./Item";
import "./WishlistItems.css";
import { proccessProducts } from "../services/proccessProducts";

const WishlistItems = () => {
  const items = useSelector((store) => store.wishlist);
  return (
    <>
      <div className="wishlistCont">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default WishlistItems;
