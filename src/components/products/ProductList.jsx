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
      const data = await getAllProducts();
      setLoaded(true);
      dispatch(productsAction.addInitialProducts(data));
    };

    loadProducts();
  }, []);

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
