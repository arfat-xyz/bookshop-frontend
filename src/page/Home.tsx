import React from "react";
import Hero from "../components/Home/Hero";
import ProductSection from "../components/Home/ProductSection";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="lg:w-11/12 mx-auto">
        <ProductSection />
      </div>
    </>
  );
};

export default Home;
