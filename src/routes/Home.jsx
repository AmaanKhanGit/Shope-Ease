import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Reviews />
    </>
  );
};

export default Home;
