import ProductImageSlider from "./overview/ProductImageSlider";
import ProductInfo from "./overview/ProductInfo ";
import "./ProductOverview.css";

const ProductOverview = () => {
  return (
    <div className="product-overview">
      <ProductImageSlider />
      <ProductInfo />
    </div>
  );
};

export default ProductOverview;
