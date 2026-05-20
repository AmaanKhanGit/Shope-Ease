import "./Reviews.css";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      reviewerName: "Denial",
      rating: "★★★★★",
      review:
        "ShopEase has one of the smoothest shopping experiences I’ve ever had. The website feels modern, responsive, and everything is easy to find.",
    },

    {
      id: 2,
      reviewerName: "Gun",
      rating: "★★★★",
      review:
        "I really liked the clean UI and fast product loading speed. The checkout process was simple and the product quality was exactly as described.",
    },
    {
      id: 3,
      reviewerName: "Zoe",
      rating: "★★★★",
      review:
        "ShopEase feels premium compared to many other e-commerce sites. The animations, product cards, and overall design make the experience enjoyable.",
    },

    {
      id: 4,
      reviewerName: "Vasco",
      rating: "★★★★★",
      review:
        "The variety of products available on ShopEase is impressive. From fashion to electronics, everything is organized perfectly and easy to browse.",
    },

    {
      id: 5,
      reviewerName: "Crystal",
      rating: "★★★★★",
      review:
        "Customer support was quick to respond and very helpful. The website also works beautifully on mobile devices which made shopping even more convenient.",
    },
  ];
  return (
    <>
      {/* //? <div className="review-head">
          //?<h1>Our happy customers</h1>
          //?</div>
      */}
      <div className="review-cont">
        {reviews.map((review) => (
          <div className="review-content" key={review.id}>
            <h1 className="reviewer-name">{review.reviewerName}</h1>
            <p className="rating-stars">{review.rating}</p>
            <p className="review">{review.review}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
