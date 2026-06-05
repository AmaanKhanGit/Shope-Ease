import "./NoProducts.css";
import { useNavigate } from "react-router-dom";

const NoProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="no-products">
      <img
        src="/No products.png"
        alt="No products found"
        className="no-products-img"
      />

      <h2>No Products Found</h2>

      <p>
        We couldn't find any products matching your search. Try different
        keywords or browse all products.
      </p>

      <button className="browse-btn" onClick={() => navigate(0)}>
        Browse All Products
      </button>
    </div>
  );
};

export default NoProducts;
