import "./Loader.css";

const Loader = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="product-card skeleton-card">
          <div className="product-img skeleton"></div>

          <div className="product-content">
            <div className="title-skeleton skeleton"></div>

            <div className="disc-skeleton skeleton"></div>
            <div className="disc-skeleton skeleton short"></div>

            <div className="price-skeleton skeleton"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loader;
