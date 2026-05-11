import { createContext, useEffect, useState } from "react";

const CONTEXT = {
  productList: [],
  isFethced: false,
};

export const ProductList = createContext(CONTEXT);

const ProductListProvider = ({ children }) => {
  const categories = [
    "smartphones",
    "furniture",
    "beauty",
    "mens-watches",
    "fragrances",
    "vehicle",
    "kitchen-accessories",
    "groceries",
    "tops",
    "laptops",
  ];

  const [products, setProducts] = useState([]);
  const [isFethced, setFetched] = useState(false);

  useEffect(() => {
    const loadProducts = async (categories) => {
      const promises = categories.map((category) =>
        fetch(`https://dummyjson.com/products/category/${category}?limit=1`)
          .then((res) => res.json())
          .then((data) => data.products[0]),
      );
      const fecthedProducts = await Promise.all(promises);
      setFetched(true);
      setProducts(fecthedProducts);
    };
    loadProducts(categories);
  }, []);

  const productList = products;

  return (
    <ProductList.Provider value={{ productList, isFethced }}>
      {children}
    </ProductList.Provider>
  );
};

export default ProductListProvider;
