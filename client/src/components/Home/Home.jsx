// import React from 'react';
import { useState } from "react";
import Banner from "../Banner/Banner.jsx";
import Blog from "../Blog/Blog.jsx";
import Products from "../Products/Product.jsx";
import Aboutus from "../Aboutus/Aboutus.jsx";
import Contactus from "../Contactus/Contactus.jsx";
import styles from "./Home.module.css";
import Title from "../Title/Title.jsx";

const Home = ({toggelDarkMode}) => {
  return (
    <div className={styles.home}>
        <Banner toggelDarkMode={toggelDarkMode} />
        <Products toggelDarkMode={toggelDarkMode} />
        <Aboutus toggelDarkMode={toggelDarkMode} />
        <Blog toggelDarkMode={toggelDarkMode} />
        <Contactus toggelDarkMode={toggelDarkMode} />
    </div>
  );
};

export default Home;
