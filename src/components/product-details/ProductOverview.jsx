import ProductImageSlider from "./ProductImageSlider";
import ProductInfo from "./ProductInfo ";
import "./ProductOverview.css"

const ProductOverview = () => {
  return (
    <div className="product-overview">
      <ProductImageSlider />
      <ProductInfo />
    </div>
  );
};

export default ProductOverview;
