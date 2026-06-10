import { useSelector } from "react-redux";
import "./ProductReviews.css";

const ProductReviews = () => {
  const { rating, reviews } = useSelector(
    (store) => store.products.selectedProduct,
  );

  return (
    <div className="reviews-main-cont">
      <div className="review-head">
        <h1>Customers Reviews (3)</h1>
        <p>
          Overall Rating: <i className="bi bi-star-fill"></i>
          {rating}
        </p>
      </div>
      <div className="reviews-cont">
        {reviews?.map((review) => {
          const date = new Date(review.date);
          return (
            <div className="review" key={review.reviewerEmail}>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                {review.rating}
              </div>
              <div className="quote">{review.comment}!</div>
              <div className="email">{review.reviewerEmail}</div>
              <div className="name">--{review.reviewerName}</div>
              <div className="date">
                {date.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductReviews;
