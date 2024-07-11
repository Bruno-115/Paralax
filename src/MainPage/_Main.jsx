import {Fragment,React} from "react";

import Header from "./Header";

import About from "./About";
import Card from "./Card";
import Footer from "./Footer";


const MainPage = () => {
  return (
    <>
      <Header />
      <About />
      <Card />
      <Footer/> 
    </>
  );
};

export default MainPage;
