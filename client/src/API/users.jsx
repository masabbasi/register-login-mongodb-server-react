import axios from "axios";

//Register
const url = (axios.defaults.baseURL = "http://localhost:2023");
axios.defaults.withCredentials = true;
const header = { headers: { "Content-Type": "application/json" } };
export const registerUser = async (userData, setRegisterError) => {
  try {
    const user = await axios.post(`${url}/register`, userData, header);
    return user;
  } catch (err) {
    setRegisterError(err?.response?.data);
  }
};

//Login
export const loginUser = async (userData, setLoginError) => {
  try {
    const user = await axios.post(`${url}/login`, userData, header);
    return user;
  } catch (err) {
    setLoginError(err?.response?.data);
  }
};

//Profile User
export const profileUser = async () => {
  try {
    const user = await axios.post(`${url}/profile`);
    return user;
  } catch (err) {
    return err;
  }
};

//LogOut
export const logOutUser = async () => {
  try {
    const user = await axios.post(`${url}/logout`);
    return user;
  } catch (err) {
    return err;
  }
};

// Upload Profile

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinaryAPI = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
export const uploadProfile = async (pic) => {
  try {
		const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUD_NAME);
    const res = await axios.post(cloudinaryAPI, data, {
      withCredentials: false,
    });
    return res;
  } catch (err) {
    return err;
  }
};
