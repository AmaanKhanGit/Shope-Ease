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

        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedFilter.includes(category)}
              onChange={(e) => {
                const value = e.target.value;

                if (e.target.checked) {
                  setSelectedFilter((prev) => [...prev, value]);
                } else {
                  setSelectedFilter((prev) =>
                    prev.filter((item) => item !== value),
                  );
                }
              }}
            />

            {category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </label>
        ))}
      </div>
      <div className="filter-actions">
        <button className="clear-btn" onClick={clearFilters}>
          Clear
        </button>
        <button className="apply-btn" onClick={applyFilter}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
