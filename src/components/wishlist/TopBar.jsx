import "./TopBar.css";

const TopBar = () => {
  const wishlist = [];
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
          <button className="btn sort-wishlist-btn">
            <i className="bi bi-sort-down"></i>
            Sort
          </button>

          <button className="clear-wishlist-btn">
            <i className="bi bi-trash"></i>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
