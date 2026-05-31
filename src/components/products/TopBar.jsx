import { useRef } from "react";
import "./TopBar.css";
import { useDispatch } from "react-redux";
import { productsAction } from "../store/products";

const TopBar = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const inputval = inputRef.current.value;
      console.log(inputval);
    }
  };
  return (
    <div className="topbar">
      <div className="search-box">
        <i className="bi bi-search"></i>

        <input
          ref={inputRef}
          onKeyDown={handleSearch}
          type="text"
          placeholder="Search products..."
        />
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
