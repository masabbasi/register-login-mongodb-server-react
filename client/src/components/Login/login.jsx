import React, { useState } from "react";
import styles from "./login.module.css";
import Title from "../Title/Title.jsx";
import { loginUser } from "../../API/users.jsx";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context.jsx";

const Login = ({ toggelDarkMode }) => {
	const {userInfo,setUserInfo} = useGlobalContext();
	const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
	const [loginFlag, setLoginFlag] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = await loginUser(loginValues, setLoginError);
		if (user?.status===200) {
			setLoginFlag(true);
			setUserInfo(user?.data)
				navigate("/")
		}
  };

  const onChangeHandler = (inputs) => {
    setLoginValues({
      ...loginValues,
      [inputs.target.name]: inputs.target.value,
    });
  };

  return (
    <>
      <Title title={"Sign In"} toggelDarkMode={toggelDarkMode} />
      <div
        className={`${styles.container} ${
          toggelDarkMode && styles.darkContainer
        }`}
      >
        <form action="#" onSubmit={submitHandler}>
				{loginFlag && (<p className={styles.success}>You Will Be Taken To The Main Page.</p>)}
          {loginError && <p className={styles.error}>{loginError}</p>}
          <div className={styles.inputContainer}>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={onChangeHandler}
              placeholder="UserName"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChangeHandler}
              placeholder="Password"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
