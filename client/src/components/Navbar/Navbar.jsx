// import React from 'react';
import { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import styles from "./Navbar.module.css";
import sun from "../../Images/sun.png";
import moon from "../../Images/moon.png";
import { Link } from "react-router-dom";
import {useGlobalContext} from "../../Context/Context.jsx"
import {profileUser, logOutUser} from "../../API/users.jsx"

const Navbar = ({ toggelDarkMode, setToggelDarkMode }) => {
  const [toggelHamburger, setToggelHamburger] = useState(false);
  const hamburgerHandler = () => {
    setToggelHamburger(!toggelHamburger);
  };
  const darkModeHandler = () => {
    setToggelDarkMode(!toggelDarkMode);
  };

  const closeMenuHandler = () => {
    setToggelHamburger(false);
  };

  // const [user, setUser] = useState({});
	const {userInfo, setUserInfo} = useGlobalContext();

const takeUser = async()=>{
	const user = await profileUser();
	setUserInfo(user.data);
}

  useEffect(() => {
		takeUser();
    // if (localStorage.getItem("userLogin") !== undefined) {
    //   const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    //   setUser(userLogin);
    // }
		// setUser(userLogin);
  }, []);

	const logOut = async ()=>{
const user = await logOutUser();
console.log(user);
if (user.statusText	=== "OK") {
	setUserInfo({});
}
	}

  return (
    <header
      className={`${styles.header} ${toggelDarkMode && styles.darkHeader}`}
    >
      <div className={styles.menu}>
        <ul
          className={`${styles.list} ${
            toggelHamburger && styles.listOpenHamburger
          } ${toggelDarkMode && styles.darkHamburger}`}
        >
          <Link
            onClick={closeMenuHandler}
            className={styles.link}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={closeMenuHandler}
            className={styles.link}
            to="/products"
          >
            Products
          </Link>
          <Link
            onClick={closeMenuHandler}
            className={styles.link}
            to="/aboutus"
          >
            About US
          </Link>
          <Link
            onClick={closeMenuHandler}
            className={styles.link}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            onClick={closeMenuHandler}
            className={styles.link}
            to="/contactus"
          >
            Contact Us
          </Link>
        </ul>
        <div
          className={`${styles.hamburger__menu} ${
            toggelHamburger && styles.hamburgerOpen
          }`}
          onClick={hamburgerHandler}
        >
          <div className={styles.menu__line}></div>
        </div>
      </div>
      <div className={styles.right}>
        {userInfo?
				<>
				<img className={styles.profile} src={userInfo.pic} alt="" />
				<div className={styles.userLogin}>
				<p className={styles.hiUser}>Hi {userInfo.username}</p>
				<span className={styles.logOut} onClick={logOut}>LogOut</span>
				</div>
				</>
          : (<>
              <Link
                className={styles.register}
                to="/register"
              >
                Register
              </Link>
   <span className={styles.Separator}>/</span>
              <Link
                className={styles.login}
                to="/login"
              >
                Login
              </Link>
							</>
				
            )}

        <img
          src={toggelDarkMode ? sun : moon}
          className={styles.darkModeBtn}
          onClick={darkModeHandler}
        />
        <img src={logo} />
      </div>
    </header>
  );
};

export default Navbar;
