// import React from 'react';
import Card from "../Card/Card.jsx";
import Title from "../Title/Title.jsx";
import styles from "./Blog.module.css";
import { blogData } from "../../Data/blog_data.js";

const Blog = ({ toggelDarkMode }) => {
  return (
    <div className={styles.blogContainer}>
      <Title title={"Blog"} toggelDarkMode={toggelDarkMode} />
      <div className={styles.container}>
        {blogData.map((post) => {
          return (
            // <div key={post.id}>
              <Card {...post} toggelDarkMode={toggelDarkMode} />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
