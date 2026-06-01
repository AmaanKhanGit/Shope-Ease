export const proccessProducts = (products, search, filter, sort) => {
  let result = [...products];

  // Search
  if (search) {
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Filter (multiple categories)
  if (filter.length > 0) {
    result = result.filter((item) => filter.includes(item.category));
  }

  // Sort
  if (sort === "Low to High") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "High to Low") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "name") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
};
