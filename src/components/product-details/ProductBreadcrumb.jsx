import { useSelector } from "react-redux";
import "./ProductBreadcrumb.css";
import { Link } from "react-router-dom";

const ProductBreadcrumb = () => {
  const product = useSelector((store) => store.products.selectedProduct);

  const categoryName =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  if (!product) return null;

  return (
    <nav className="breadcrumb">
      <a href="/">Home</a>

      <span>/</span>

      <Link to="/products">Products</Link>

      <span>/</span>

      <Link to={`/products/${product.category}`}>{categoryName}</Link>

      <span>/</span>

      <p>{product.title}</p>
    </nav>
  );
};

export default ProductBreadcrumb;
