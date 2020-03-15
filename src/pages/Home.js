import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CategoriesFoods from "./CategoriesFoods";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Chcete zažít opravdovou Asii?"
          subtitle="Obědové menu od 99 Kč"
        >
          <Link to="/menu" className="btn-primary">
            Zjisti více
          </Link>
        </Banner>
      </Hero>
      <CategoriesFoods />
    </>
  );
};

export default Home;
