import React from "react";
import styles from "./Page404.module.css"

const Page404 = ({toggelDarkMode})=>{

return(
	<div className={`${styles.container} ${toggelDarkMode && styles.darkContainer}`}>
	<h1>404
		<br />
		Not Found
	</h1>
	</div>
)

}

export default Page404;