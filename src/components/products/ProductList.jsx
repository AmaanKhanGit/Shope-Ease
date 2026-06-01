import Product from "./Product";
import "./ProductList.css";
import { getAllProducts } from "../services/productAPI";
import { useEffect, useRef, useState } from "react";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/products";
import { proccessProducts } from "../services/proccessProducts";
import Pagination from "./Pagination";

const ProductList = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsRef = useRef();

  //store product check
  const { products, search, sort, filter } = useSelector(
    (store) => store.products,
  );

  //dispatch check

  const dispatch = useDispatch();

  const limit = 20;
  const skip = (currPage - 1) * limit;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoaded(false);

        const data = await getAllProducts(limit, skip);
        dispatch(productsAction.setProducts(data.products));
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };

    loadProducts();
  }, [currPage, dispatch]);

  const firstRender = useRef(true);

  const changePage = (page) => {
    setCurrPage(page);

    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  //? search sort and filter logic

  const result = proccessProducts(products, search, filter, sort);

  return (
    <>
      <div ref={productsRef} className="product-cont">
        {isLoaded ? (
          result.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <Loader length={10} />
        )}
      </div>
      <div className="pagination">
        <Pagination
          currPage={currPage}
          totalPages={totalPages}
          changePage={changePage}
        />
      </div>
    </>
  );
};

export default ProductList;
