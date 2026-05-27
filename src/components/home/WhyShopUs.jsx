import "./WhyShopUs.css";
const WhyShopUs = () => {
  return (
    <>
      <section className="why-shop-us">
        <h2>Why Shop With Us</h2>

        <div className="features">
          <div className="feature-card">
            <i className="bi bi-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery on all orders.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-shield-check"></i>
            <h3>Secure Payment</h3>
            <p>100% secure payment and checkout process.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-arrow-repeat"></i>
            <h3>Easy Returns</h3>
            <p>Hassle-free returns and refunds.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-headset"></i>
            <h3>24/7 Support</h3>
            <p>Friendly customer support anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyShopUs;
