const SortBox = ({
  selectedSort,
  setSelectedSort,
  applySort,
  stopPropagation,
}) => {
  return (
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
  );
};

export default SortBox;
