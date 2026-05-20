import "./FeaturedProducts.css";
import Loader from "..//Loader";
import FetchProducts from "./FetchProducts";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const categories = [
    "smartphones",
    "furniture",
    "fragrances",
    "vehicle",
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

  return (
    <section className="sections">
      <div className="section-heading">
        <h1>Featured Products</h1>
        <a href="#">
          View All
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      <div className="product-cont">
        {!isFethced && <Loader />}
        {isFethced &&
          products.map((product) => (
            <FetchProducts key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
