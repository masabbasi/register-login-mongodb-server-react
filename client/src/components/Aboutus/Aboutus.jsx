import React from 'react';
import styles from "./Aboutus.module.css";
import Title from "../Title/Title.jsx";

const Aboutus = ({toggelDarkMode}) => {
  return (
<>
<Title title={"About Us"} toggelDarkMode={toggelDarkMode} />
<div className={`${styles.container} ${toggelDarkMode && styles.darkContainer}`}>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit adipisci reprehenderit assumenda voluptatibus dolor quisquam repudiandae quae inventore magni magnam ipsum nobis eius, culpa placeat? Maiores, odio! Officia cum, quod tenetur fugit placeat adipisci et. Adipisci praesentium possimus voluptas consequuntur illo animi blanditiis libero! Dolores aspernatur excepturi unde pariatur?
	</p>
</div>
	</>
  );
};

export default Aboutus;
