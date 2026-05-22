import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <div
        className="product-img"
        style={{
          backgroundImage: `url(${encodeURI(product.thumbnail)})`,
        }}
      ></div>
      <div className="product-content">
        <h2 className="title">{product.title}</h2>
        <p className="disc">{product.description}</p>
        <p className="price">{product.price}</p>
        <button
          className="btn"
          style={{ backgroundColor: "var(--mainColor)", color: "white" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
