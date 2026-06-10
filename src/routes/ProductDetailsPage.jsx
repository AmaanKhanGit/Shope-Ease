import { useParams } from "react-router-dom";
import ProductBreadcrumb from "../components/product-details/ProductBreadcrumb";
import ProductOverview from "../components/product-details/ProductOverview";
import ProductExtraInfo from "../components/product-details/ProductExtraInfo";
import ProductReviews from "../components/product-details/ProductReviews";
import RelatedProducts from "../components/product-details/RelatedProducts";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../components/services/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../components/store/products";
import ProductDetailsSkeleton from "../components/common/ProductDetailsSkeleton";
import NoProducts from "../components/common/NoProducts";

const ProductDetailsPage = () => {
  const { slug } = useParams();

  const productID = slug.split("-")[0];

  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const selectedProduct = useSelector(
    (store) => store.products.selectedProduct,
  );
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      let data;
      setLoaded(false);
      data = await getSingleProduct(productID);
      dispatch(productsAction.setSelectedProduct(data));
    } catch (error) {
      setError(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  return (
    <>
      {!isLoaded ? (
        <ProductDetailsSkeleton />
      ) : error ? (
        <NoProducts />
      ) : (
        <div className="product-detail-wrapper">
          <ProductBreadcrumb />
          <ProductOverview />
          <ProductExtraInfo />
          <ProductReviews />
          <RelatedProducts />
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
