export const proccessWishlist = (wishlist, sort) => {
  let result = [...wishlist];

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
