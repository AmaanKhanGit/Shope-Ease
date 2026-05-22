import Product from "./Product";
import "./ProductList.css";
import { getAllProducts } from "../services/productAPI";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  // const prodStore = useSelector();

  // const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setLoaded(true);

    };

    loadProducts();
  }, []);

  return (
    <div className="product-cont">
      {isLoaded ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductList;
