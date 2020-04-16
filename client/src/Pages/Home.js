import React from "react";
import { Footer } from "../components/Footer";
import FooterWave from "../svg/footer-wave.svg";
import { MainHeader } from "../components/HomeComponents/MainHeader";
import { Advantages } from "../components/HomeComponents/Advantages";
import { Notebook } from "../components/HomeComponents/Notebook";
import { Prices } from "../components/HomeComponents/Prices";
export const Home = () => {
  return (
    <>
      <MainHeader />
      <Advantages />
      <Notebook />
      <Prices />
      <Footer className="home" url={`url('${FooterWave}')`} isHomePage={true} />
    </>
  );
};
