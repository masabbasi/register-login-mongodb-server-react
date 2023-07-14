import React, { useState } from "react";
import styles from "./register.module.css";
import Title from "../Title/Title.jsx";
import { registerUser, uploadProfile } from "../../API/users.jsx";
import { useNavigate } from "react-router-dom";

const Register = ({ toggelDarkMode }) => {
  const navigate = useNavigate();
  const [registerValues, setRegisterValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: {},
  });

  const [registerError, setRegisterError] = useState({});
  const [registerFlag, setRegisterFlag] = useState(false);
	const [disable,setDisable] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = await registerUser(registerValues, setRegisterError);
    if (user.data) {
      setRegisterFlag(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const onChangeHandler = (inputs) => {
    if (inputs.target.name === "pic") {
      const file = inputs.target.files[0];
      if (file) {
        setRegisterValues({ ...registerValues, pic: file });
      }
    } else {
      setRegisterValues({
        ...registerValues,
        [inputs.target.name]: inputs.target.value,
      });
    }
  };

  const uploadHandler = async () => {
		setDisable(true);
    const res = await uploadProfile(registerValues.pic);
    if (res.statusText	=== "OK") {
			setDisable(false);
      setRegisterValues({...registerValues, pic: res.data.secure_url});
    }
  };

  return (
    <>
      <Title title={"Sign Up"} toggelDarkMode={toggelDarkMode} />
      <div
        className={`${styles.container} ${
          toggelDarkMode && styles.darkContainer
        }`}
      >
        <form action="#" onSubmit={submitHandler}>
          {registerFlag && (
            <p className={styles.success}>Registration Was Successful.</p>
          )}
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
          {registerError?.hasOwnProperty("username") && (
            <p className={styles.error}>{registerError.username}</p>
          )}
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
          {registerError?.hasOwnProperty("password") && (
            <p className={styles.error}>{registerError.password}</p>
          )}
          <div className={styles.inputContainer}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={onChangeHandler}
              placeholder="confirmPassword"
            />
          </div>
          {registerError?.hasOwnProperty("confirmPassword") && (
            <p className={styles.error}>{registerError.confirmPassword}</p>
          )}
          <div className={styles.inputContainer}>
            <label htmlFor="pic">Profile Picture</label>
            <input
              type="file"
              name="pic"
              id="pic"
              onChange={onChangeHandler}
              placeholder="Confirm Password"
            />
            <button className={styles.uploadBtn} type="button" onClick={uploadHandler}>
              Upload Profile
            </button>
          </div>
          <button className={styles.signUp} disabled={disable?true:false} type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Register;
