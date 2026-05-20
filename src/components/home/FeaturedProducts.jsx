import "./FeaturedProducts.css";
import Loader from "../common/Loader";
import FetchProducts from "./FetchProducts";
import { useEffect, useState } from "react";
import { getFeaturedProducts } from "../services/productAPI";
import { Link } from "react-router-dom";

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
      const data = await getFeaturedProducts(categories);
      setFetched(true);
      setProducts(data);
    };
    loadProducts(categories);
  }, []);

  return (
    <section className="sections">
      <div className="section-heading">
        <h1>Featured Products</h1>
        <Link to="/products">
          View All
          <i className="bi bi-arrow-right"></i>
        </Link>
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
