import Product from "./Product";
import "./ProductList.css";
import { getAllProducts } from "../services/productAPI";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/products";

const ProductList = () => {
  const [isLoaded, setLoaded] = useState(false);

  //store product check
  const products = useSelector((store) => store.products);

  //dispatch check

  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getAllProducts();

        dispatch(productsAction.addInitialProducts(data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };

    if (products.length === 0) {
      loadProducts();
    } else {
      setLoaded(true);
    }
  }, [products.length]);

  return (
    <div className="product-cont">
      {isLoaded ? (
        products
          .filter((product) => product.id != 8)
          .map((product) => <Product key={product.id} product={product} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductList;
