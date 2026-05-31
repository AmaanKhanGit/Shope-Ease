import Product from "./Product";
import "./ProductList.css";
import { getAllProducts } from "../services/productAPI";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/products";

const ProductList = () => {
  const [isLoaded, setLoaded] = useState(false);

  //store product check
  const { products, search, sort, filter } = useSelector(
    (store) => store.products,
  );

  //dispatch check

  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getAllProducts();

        dispatch(productsAction.addInitialProducts(data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };

    if (products.length === 0) {
      loadProducts();
    } else {
      setLoaded(true);
    }
  }, [products.length]);

  //? increase prodcuts
  const bigData = [
    ...products,

    ...products.map((p) => ({
      ...p,
      id: p.id + 100,
      title: `${p.title} Pro`,
      price: p.price + 50,
    })),

    ...products.map((p) => ({
      ...p,
      id: p.id + 200,
      title: `${p.title} Max`,
      price: p.price + 100,
    })),
  ];

  //? search sort and filter logic

  let result = [...bigData];
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

  return (
    <div className="product-cont">
      {isLoaded ? (
        result.map((product) => (
          <Product key={Math.random()} product={product} />
        ))
      ) : (
        <Loader length={10} />
      )}
    </div>
  );
};

export default ProductList;
