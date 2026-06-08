import { useNavigate } from "react-router-dom";
import "./Hero.css";
import HeroStats from "./HeroStats";
const Hero = () => {
  const navigate = useNavigate();
  const handleClicks = (e) => {
    if (e.target.value == "sign-in") {
      navigate("/login-signup");
    } else if (e.target.value == "product") {
      navigate("/products");
    } else {
      console.log("Unexpected event");
    }
  };
  return (
    <section className="hero section">
      <div className="hero-main">
        <div className="hero-content">
          <div className="tag">TRENDING COLLECTION 2026</div>

          <h1 className="heading">
            Everything You Need,
            <br />
            All in One Place.
          </h1>

          <p className="phrase">
            Shop fashion, electronics, groceries and everyday essentials with a
            seamless shopping experience designed for modern lifestyles.
          </p>

          <div className="btn-cont">
            <button
              className="btn btn-main"
              value="product"
              onClick={handleClicks}
            >
              Shop Now
            </button>

            <button
              className="btn btn-second"
              value="sign-in"
              onClick={handleClicks}
            >
              Sign In
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/hero-image.png" alt="Hero Image" className="hero-image" />
        </div>
      </div>

      <HeroStats />
    </section>
  );
};

export default Hero;
