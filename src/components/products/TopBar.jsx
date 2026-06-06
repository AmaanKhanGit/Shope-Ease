import { useEffect, useRef, useState } from "react";
import "./TopBar.css";
import { useDispatch } from "react-redux";
import { productsAction } from "../store/products";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";

const TopBar = () => {
  const dispatch = useDispatch();

  const [isFilter, setFilter] = useState(false);
  const [isSort, setSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  (useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(productsAction.setSearch(searchQuery));
    }, 500);

    return () => clearTimeout(timer);
  }),
    [searchQuery, dispatch]);

  return (
    <div className="topbar">
      <div className="search-box">
        <i className="bi bi-search"></i>

        <input
          onChange={(e) => setSearchQuery(e.target.value)}
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

      {isSort && (
        <div className="dialog-overlay active" onClick={() => setSort(false)}>
          <SortBox
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            applySort={applySort}
            stopPropagation={stopPropagation}
          />
        </div>
      )}

      {/* //? filter */}

      {isFilter && (
        <div className="dialog-overlay active" onClick={() => setFilter(false)}>
          <FilterBox
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            applyFilter={applyFilter}
            clearFilters={clearFilters}
            stopPropagation={stopPropagation}
          />
        </div>
      )}
    </div>
  );
};

export default TopBar;
