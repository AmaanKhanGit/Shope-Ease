import { useContext } from "react";
import "./FeaturedProducts.css";
import { ProductList } from "../store/product-list-store";
import Loader from "./Loader";
import FetchProducts from "./FetchProducts";

const FeaturedProducts = () => {
  const { productList, isFethced } = useContext(ProductList);
  console.log("using context", productList);
  console.log(typeof productList);
  console.log(isFethced);

  return (
    <section className="sections">
      <div className="section-heading">
        <h1>Featured Products</h1>
        <a href="#">
          View All
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      <div className="product-cont">
        {!isFethced && <Loader />}
        {isFethced &&
          productList.map((product) => (
            <FetchProducts key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
