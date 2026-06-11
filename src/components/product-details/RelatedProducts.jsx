import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../products/Product";
import "./RelatedProducts.css";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

const RelatedProducts = () => {
  const { category } = useSelector((store) => store.products.selectedProduct);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=5`,
        );
        setLoading(true);
        const data = await res.json();
        setProducts(data.products);
        return data;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category]);

  return (
    <div className="related-wrapper">
      <div className="related-head">
        <h1> You may also like</h1>
        <Link to="/products">
          View All <i className="bi bi-arrow-right"></i>{" "}
        </Link>
      </div>
      <div className="releted-product-cont">
        {loading ? (
          <Loader length={5} />
        ) : (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
