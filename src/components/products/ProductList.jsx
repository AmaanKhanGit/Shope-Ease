import Product from "./Product";
import "./ProductList.css";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsBySearch,
} from "../services/productAPI";
import { useEffect, useRef, useState } from "react";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/products";
import { proccessProducts } from "../services/proccessProducts";
import Pagination from "./Pagination";
import Error from "../common/Error";
import NoProducts from "../common/NoProducts";

const ProductList = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const productsRef = useRef();

  const dispatch = useDispatch();

  const { products, search, sort, filter } = useSelector(
    (store) => store.products,
  );

  const limit = 20;
  const skip = (currPage - 1) * limit;

  const loadProducts = async () => {
    try {
      setLoaded(false);

      let data;

      if (filter) {
        data = await getProductsByCategory(filter, limit, skip);
      } else if (search) {
        data = await getProductsBySearch(search);
      } else {
        data = await getAllProducts(limit, skip);
      }

      dispatch(productsAction.setProducts(data.products));

      setTotalPages(Math.ceil(data.total / limit));
    } catch (error) {
      setError(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [currPage, filter, search]);

  useEffect(() => {
    setCurrPage(1);
  }, [filter, search]);

  const changePage = (page) => {
    setCurrPage(page);

    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const result = proccessProducts(products, sort);

  return (
    <>
      <div ref={productsRef} className="product-cont">
        {!isLoaded ? (
          <Loader length={10} />
        ) : error ? (
          <Error message={error} />
        ) : result.length === 0 ? (
          <NoProducts />
        ) : (
          result.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </div>

      <Pagination
        currPage={currPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </>
  );
};

export default ProductList;
