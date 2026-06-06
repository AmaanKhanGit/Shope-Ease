import { useNavigate } from "react-router-dom";
import "./Hero.css";
import HeroStats from "./HeroStats";
const Hero = () => {
  const navigate = useNavigate();
  const handleClicks = () => {
    navigate("/products");
  };
  return (
    <section className="hero sections">
      <div className="left">
        <div className="tag">TRENDING COLLECTION 2026</div>
        <h1 className="heading">Discover Modern Shopping</h1>
        <p className="phrase">
          Explore premium fashion, gadgets and accessories with a clean modern
          shopping experience designed for everyone.
        </p>
        <div className="btn-cont">
          <button className="btns" id="shopeNow" onClick={handleClicks}>
            Shope Now
          </button>
          <button className="btns" id="exploreNow" onClick={handleClicks}>
            Explore Now
          </button>
        </div>
        <HeroStats />
      </div>
      <div className="right">
        <img src="/hero-image.png" alt="Hero Image" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
