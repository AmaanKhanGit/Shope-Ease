import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import NewsLetter from "../components/home/NewsLetter";
import WhyShopUs from "../components/home/WhyShopUs";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <WhyShopUs />
      <NewsLetter />
    </>
  );
};

export default Home;
