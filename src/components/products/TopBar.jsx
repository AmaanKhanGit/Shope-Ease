import { useRef, useState } from "react";
import "./TopBar.css";
import { useDispatch } from "react-redux";
import { productsAction } from "../store/products";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";

const TopBar = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [isFilter, setFilter] = useState(false);
  const [isSort, setSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const inputval = inputRef.current.value;
      // dispatch here
      dispatch(productsAction.setSearch(inputval));
    }
  };

  const applySort = () => {
    setSort(false);
    dispatch(productsAction.setSort(selectedSort));
  };

  const applyFilter = () => {
    setFilter(false);
    dispatch(productsAction.setFilter(selectedFilter)); //?  ye karna chahiye ki nahi gpt bhai
  };

  const clearFilters = () => {
    setSelectedFilter([]);
    dispatch(productsAction.clearFilter());
  };

  //^ use to stop the event happening on it's parent element
  const stopPropagation = (e) => {
    e.stopPropagation();
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

      <button
        className="topbar-btn"
        onClick={() => {
          setFilter(false);
          setSort(true);
        }}
      >
        <span className="btn-text">Sort</span>
        <i className="bi bi-sort-down"></i>
      </button>

      <button
        className="topbar-btn filter-btn"
        onClick={() => {
          setSort(false);
          setFilter(true);
        }}
      >
        <span className="btn-text">Filter</span>
        <i className="bi bi-sliders"></i>
      </button>

      {/*//? sort  */}

      <div
        className={`dialog-overlay ${isSort ? "active" : ""}`}
        onClick={() => setSort(false)}
      >
        <SortBox
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          applySort={applySort}
          stopPropagation={stopPropagation}
        />
      </div>

      {/* //? filter */}

      <div
        className={`dialog-overlay ${isFilter ? "active" : ""}`}
        onClick={() => setFilter(false)}
      >
        <FilterBox
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          applyFilter={applyFilter}
          clearFilters={clearFilters}
          stopPropagation={stopPropagation}
        />
      </div>
    </div>
  );
};

export default TopBar;
