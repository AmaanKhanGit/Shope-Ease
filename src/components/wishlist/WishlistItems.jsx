import { useSelector } from "react-redux";
import Item from "./Item";
import "./WishlistItems.css";
import { proccessProducts } from "../services/proccessProducts";
import { proccessWishlist } from "../services/proccessWishlist";

const WishlistItems = () => {
  const { wishlist, sort } = useSelector((store) => store.wishlist);

  const proccessedWishlist = proccessWishlist(wishlist, sort);
  return (
    <>
      <div className="wishlistCont">
        {proccessedWishlist.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default WishlistItems;
