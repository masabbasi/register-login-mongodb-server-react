// import React from 'react';
import styles from "./Products.module.css";
import Title from "../Title/Title.jsx";
import Card from "../Card/Card.jsx";
import { productData } from "../../Data/product_data.js";

const Products = ({ toggelDarkMode }) => {
  return (
    <div className={styles.productContainer}>
      <Title title={"Products"} toggelDarkMode={toggelDarkMode} />
      <div className={styles.container}>
        {productData.map((product) => {
          return (
            // <div key={product.id}>
            <Card {...product} toggelDarkMode={toggelDarkMode} />
            /* </div> */
          );
        })}
      </div>
    </div>
  );
};

export default Products;
