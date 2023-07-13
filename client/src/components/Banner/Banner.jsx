// import React from 'react';
import banner from "../../Images/banner.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
<div className={styles.container}>
	<img src={banner} alt="city" />
	<div className={styles.text}>
		<h1>First Website</h1>
		<p>We're Learning <span>React.js</span></p>
	</div>
</div>
  );
};

export default Banner;
