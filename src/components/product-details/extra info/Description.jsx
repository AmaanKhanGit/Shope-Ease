import { useSelector } from "react-redux";
import "./Description.css";

const Description = () => {
  const description = useSelector(
    (store) => store.products.selectedProduct.description,
  );

  return (
    <div className="description-cont">
      <h1 className="extra-info-heading">Description</h1>
      <p className="description">{description}</p>
      <br />
      <p className="description">{description}</p>
      <br />
      <p className="description">{description}</p>
    </div>
  );
};

export default Description;
