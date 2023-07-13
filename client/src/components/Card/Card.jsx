// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, image, title, description, toggelDarkMode }) => {
  return (
    <div
      className={`${styles.container} ${
        toggelDarkMode && styles.darkContainer
      }`}
    >
      <img src={image} />
      <a href="#">
        <h3>{title}</h3>
      </a>
      <p>
        {description}
        <Link
          to={`/register-login-mongodb-server-react/detail/${id}`}
          className={styles.more}
        >
          See More
        </Link>
      </p>
    </div>
  );
};

export default Card;
