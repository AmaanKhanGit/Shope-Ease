import { useState } from "react";
import { useSelector } from "react-redux";
import "./ProductImageSlider.css";

const ProductImageSlider = () => {
  const product = useSelector((store) => store.products.selectedProduct);

  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="image-gallery">
      <div className="main-image">
        <button className="control prev" onClick={prevImage}>
          ❮
        </button>

        <img src={product.images[activeIndex]} alt={product.title} />

        <button className="control next" onClick={nextImage}>
          ❯
        </button>
      </div>

      <div className="thumbnails">
        {product.images.map((image, index) => (
          <div
            key={image}
            className={`thumbnail ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
