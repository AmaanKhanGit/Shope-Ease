import "./LeftHero.css";

const LeftHero = () => {
  return (
    <div className="leftHero">
      <div className="heroContent">
        <div className="heroTag">🔥 TRENDING COLLECTION 2026</div>

        <h1 className="heroHeading">
          Shop Smarter,
          <span> Live Better.</span>
        </h1>

        <p className="heroDescription">
          Discover thousands of products from fashion, electronics, groceries
          and more — all in one place.
        </p>

        <img
          src="/hero-auth.png"
          alt="shopping illustration"
          className="heroImage"
        />
      </div>
    </div>
  );
};

export default LeftHero;
