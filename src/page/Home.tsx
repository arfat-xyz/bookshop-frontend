import Hero from "../components/Home/Hero";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-screen-lg mx-auto">
        <ProductSection heading="Top 10 products" />
      </div>
    </>
  );
};

export default Home;
