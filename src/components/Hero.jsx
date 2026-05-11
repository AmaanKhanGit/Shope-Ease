import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <div className="tag">TRENDING COLLECTION 2026</div>
        <h1 className="heading">Discover Modern Shopping</h1>
        <p className="phrase">
          Explore premium fashion, gadgets and accessories with a clean modern
          shopping experience designed for everyone.
        </p>
        <div className="btn-cont">
          <button className="btns" id="shopeNow">
            Shope Now
          </button>
          <button className="btns" id="exploreNow">
            Explore Now
          </button>
        </div>
      </div>
      <div className="right">
        <img src="/hero-image.png" alt="Hero Image" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
