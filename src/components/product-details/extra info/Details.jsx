import "./Details.css";
import { useSelector } from "react-redux";

const Details = () => {
  const { selectedProduct } = useSelector((store) => store.products);

  return (
    <div className="details-cont">
      <h1 className="extra-info-heading">Product Details</h1>
      <div className="details-table">
        <div className="table-itmes">
          <p className="title">SKU:</p>
          <p className="detail">{selectedProduct.sku}</p>
        </div>
        <div className="table-itmes">
          <p className="title">Weigth:</p>
          <p className="detail">{selectedProduct.weight}g</p>
        </div>
        <div className="table-itmes">
          <p className="title">Stock:</p>
          <p className="detail">{selectedProduct.stock}</p>
        </div>
        <div className="table-itmes">
          <p className="title">Availability:</p>
          <p className="detail">{selectedProduct.availabilityStatus}</p>
        </div>
        <div className="table-itmes">
          <p className="title">Shipping:</p>
          <p className="detail">{selectedProduct.shippingInformation}</p>
        </div>
        <div className="table-itmes">
          <p className="title">Warranty:</p>
          <p className="detail">{selectedProduct.warrantyInformation}</p>
        </div>
        <div className="table-itmes">
          <p className="title">Return Policy:</p>
          <p className="detail">{selectedProduct.returnPolicy}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
