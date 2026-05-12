const FetchProducts = ({ product }) => {
  return (
    <div className="product-card">
      <div
        className="product-img"
        style={{
          backgroundImage: `url(${product.thumbnail})`,
        }}
      ></div>
      <div className="product-content">
        <h2 className="title">{product.title}</h2>
        <p className="disc">{product.description}</p>
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
};

export default FetchProducts;
