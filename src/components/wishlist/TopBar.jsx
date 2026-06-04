import { useDispatch, useSelector } from "react-redux";
import "./TopBar.css";
import { wishlistAction } from "../store/wishlist";
import { useState } from "react";

const TopBar = () => {
  const { wishlist, sort } = useSelector((store) => store.wishlist);
  const [selectedSort, setSelectedSort] = useState(sort);
  const [isSort, setSort] = useState(false);

  const dispatch = useDispatch();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const applySort = () => {
    dispatch(wishlistAction.setWishlistSort(selectedSort));
    setSort(false);
  };

  return (
    <>
      <div className="wishlist-topbar">
        <div className="wishlist-info">
          <h1>My Wishlist</h1>
          {wishlist.length > 0 ? (
            <p>{wishlist.length} items saved</p>
          ) : (
            <p>No such an item</p>
          )}
        </div>

        <div className="wishlist-actions">
          <button
            className="btn sort-wishlist-btn"
            title="Sorting coming soon"
            onClick={() => setSort(true)}
          >
            <i className="bi bi-sort-down"></i>
            Sort
          </button>

          <button
            className="clear-wishlist-btn"
            onClick={() => dispatch(wishlistAction.clearWishlist())}
          >
            <i className="bi bi-trash"></i>
            Clear All
          </button>
        </div>

        {isSort && (
          <div className="dialog-overlay active" onClick={() => setSort(false)}>
            <div className="dialog-box" onClick={stopPropagation}>
              <h3>Sort Products</h3>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="Low to High"
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Price: Low to High
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="High to Low"
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Price: High to Low
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="rating"
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Rating
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="name"
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Name A-Z
              </label>
              <button className="apply-btn" onClick={applySort}>
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TopBar;
