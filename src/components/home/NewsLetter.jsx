import "./NewsLetter.css";

const NewsLetter = () => {
  const handleSubscribe = () => {
    console.log("subscribed !");
  };

  return (
    <section className="newsletter">
      {/* heading + text */}
      <div className="newsletter-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Get updates about new arrivals, exclusive offers and special
          discounts.
        </p>
      </div>

      {/* form */}
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button onClick={handleSubscribe}>Subscribe</button>
      </form>

      {/* attractive cards */}
      <div className="newsletter-features">
        <div className="news-card">
          <i className="bi bi-tags"></i>
          <p>Exclusive Offers</p>
        </div>

        <div className="news-card">
          <i className="bi bi-box-seam"></i>
          <p>New Arrivals</p>
        </div>

        <div className="news-card">
          <i className="bi bi-percent"></i>
          <p>Special Discounts</p>
        </div>

        <div className="news-card">
          <i className="bi bi-bell"></i>
          <p>Product Updates</p>
        </div>
      </div>

      {/* bottom text */}
      <span className="best-wish">Thanks for being part of our journey ❤</span>
    </section>
  );
};

export default NewsLetter;
