export const getFeaturedProducts = async (categories) => {
  const promises = categories.map(async (category) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=1`,
    );
    const data = await res.json();
    return data.products[0];
  });

  return Promise.all(promises);
};

export const getAllProducts = async (limit, skip) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  const data = await res.json();

  return data;
};

export const getSingleProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return await res.json();
};

export const getProductsByCategory = async (filter, limit, skip) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${filter}?limit=${limit}&skip=${skip}`,
  );
  const data = await res.json();

  return data;
};

export const getProductsBySearch = async (search) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
  const data = await res.json();

  return data;
};
