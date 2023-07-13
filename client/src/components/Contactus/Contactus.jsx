// import React from 'react';
import styles from "./Contactus.module.css";
import Title from "../Title/Title.jsx";

const Contactus = ({toggelDarkMode}) => {
  return (
<>
<Title title={"Contact Us"} toggelDarkMode={toggelDarkMode} />
<div className={`${styles.container} ${toggelDarkMode && styles.darkContainer}`}>
<form action="#">
	<div>Name:<br /><input type="name" /></div>
	<div>Email:<br /><input type="email" /></div>
	<div>Text:<br /><textarea name="comment" id="" cols="30" rows="10"></textarea></div>
	<button type="submit">Send</button>
</form>
</div>
	</>
  );
};

export default Contactus;
