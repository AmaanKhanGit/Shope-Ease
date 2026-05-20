import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import Reviews from "../components/home/Reviews";

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
