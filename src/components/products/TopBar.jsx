import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="search-box">
        <i className="bi bi-search"></i>

        <input type="text" placeholder="Search products..." />
      </div>

      <button className="topbar-btn">
        <span className="btn-text">Sort</span>
        <i className="bi bi-sort-down"></i>
      </button>

      <button className="topbar-btn filter-btn">
        <span className="btn-text">Filter</span>
        <i className="bi bi-sliders"></i>
      </button>
    </div>
  );
};

export default TopBar;
