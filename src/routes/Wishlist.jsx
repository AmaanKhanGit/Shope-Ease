import { useEffect } from "react";
import EmptyList from "../components/wishlist/EmptyList";
import TopBar from "../components/wishlist/TopBar";
import WishlistItems from "../components/wishlist/WishlistItems";

const Wishlist = () => {
  const wishlistItems = [];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wishlist-container">
      <TopBar />
      {wishlistItems.length > 0 ? <WishlistItems /> : <EmptyList />}
    </div>
  );
};

export default Wishlist;
