// import React from 'react';
import styles from "./Title.module.css";

const Title = ({title,toggelDarkMode}) => {
  return (
   <>
	 <h1 className={`${styles.title} ${toggelDarkMode && styles.darkTitle}`}>{title}</h1>
	 </>
  );
};

export default Title;
