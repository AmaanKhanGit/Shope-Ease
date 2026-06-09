import Description from "./extra info/Description";
import Details from "./extra info/Details";
import "./ProductExtraInfo.css";

const ProductExtraInfo = () => {
  return (
    <div className="extra-info-cont">
      <Description />
      <Details />
    </div>
  );
};

export default ProductExtraInfo;
