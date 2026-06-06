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

const ProductDetailsPage = () => {
  const { slug } = useParams();

  const productID = slug.split("-")[0];

  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const selectedProduct = useSelector(
    (store) => store.products.selectedProduct,
  );
  const dispatch = useDispatch();

  console.log("outer console", selectedProduct);

  const fetchProduct = async () => {
    try {
      let data;
      setLoaded(false);
      console.log("trying data fetch");
      data = await getSingleProduct(productID);
      console.log("data is: ", data);
      dispatch(productsAction.setSelectedProduct(data));
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      console.log("fetched product finally : ", selectedProduct);
      setLoaded(true);
    }
  };

  useEffect(() => {
    console.log("use effect");

    fetchProduct();
  }, [productID]);

  return (
    <>
      {!isLoaded ? (
        <p>Loading....</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          <ProductBreadcrumb />
          <ProductOverview />
          <ProductExtraInfo />
          <ProductReviews />
          <RelatedProducts />
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
