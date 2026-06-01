export const getFeaturedProducts = async (categories) => {
  const promises = categories.map((category) =>
    fetch(`https://dummyjson.com/products/category/${category}?limit=1`)
      .then((res) => res.json())
      .then((data) => data.products[0]),
  );

  return await Promise.all(promises);
};

export const getAllProducts = async (limit, skip) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  const data = await res.json();

  return data;
};
