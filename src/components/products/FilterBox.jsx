import "./SortFilter.css";

const FilterBox = ({
  selectedFilter,
  setSelectedFilter,
  applyFilter,
  clearFilters,
  stopPropagation,
}) => {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
  ];

  return (
    <div className="dialog-box" onClick={stopPropagation}>
      <h3>Filters</h3>

      <div className="filter-group">
        <label>
          <input
            type="radio"
            name="category"
            value=""
            checked={selectedFilter === ""}
            onChange={(e) => setSelectedFilter(e.target.value)}
          />
          All Categories
        </label>

        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedFilter === category}
              onChange={(e) => setSelectedFilter(e.target.value)}
            />

            {category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </label>
        ))}
      </div>

      <button className="apply-btn" onClick={applyFilter}>
        Apply
      </button>
    </div>
  );
};

export default FilterBox;
