import { useParams } from "react-router-dom";
import ProductBreadcrumb from "../components/product-details/ProductBreadcrumb";
import ProductOverview from "../components/product-details/ProductOverview";
import ProductExtraInfo from "../components/product-details/ProductExtraInfo";
import ProductReviews from "../components/product-details/ProductReviews";
import RelatedProducts from "../components/product-details/RelatedProducts";

const ProductDetailsPage = () => {
  const { productID } = useParams();
  return (
    <>
      <ProductBreadcrumb />

      <ProductOverview />

      <ProductExtraInfo />

      <ProductReviews />

      <RelatedProducts />
    </>
  );
};

export default ProductDetailsPage;
