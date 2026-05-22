import Product from "./Product";
import "./ProductList.css";
import { getAllProducts } from "../services/productAPI";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllProducts();

      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <div className="product-cont">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
