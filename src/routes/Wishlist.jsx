import { useEffect } from "react";
import EmptyList from "../components/wishlist/EmptyList";
import TopBar from "../components/wishlist/TopBar";
import WishlistItems from "../components/wishlist/WishlistItems";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((store) => store.wishlist);

  return (
    <div className="wishlist-container">
      <TopBar />
      {wishlist.length > 0 ? <WishlistItems /> : <EmptyList />}
    </div>
  );
};

export default Wishlist;
