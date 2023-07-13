import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Product.jsx";
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contactus from "./components/Contactus/Contactus.jsx";
import "./main.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Page404 from "./components/404/Page404.jsx";
import Detail from "./components/Card/Detail.jsx";
import Login from "./components/Login/login.jsx";
import Register from "./components/Register/register.jsx";

function App() {
  const [toggelDarkMode, setToggelDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <div className={toggelDarkMode ? "darkMode" : "lightMode"}>
        <Navbar
          toggelDarkMode={toggelDarkMode}
          setToggelDarkMode={setToggelDarkMode}
        />
        <Routes>
          <Route
            path="/register-login-mongodb-server-react/"
            element={<Home toggelDarkMode={toggelDarkMode} />}
          />
          <Route
					path="/register-login-mongodb-server-react/products"
            element={<Products toggelDarkMode={toggelDarkMode} />}
          />
          <Route
            path="/register-login-mongodb-server-react/aboutus"
            element={<Aboutus toggelDarkMode={toggelDarkMode} />}
          />
          <Route
            path="/register-login-mongodb-server-react/blog"
            element={<Blog toggelDarkMode={toggelDarkMode} />}
          />
          <Route
            path="/register-login-mongodb-server-react/contactus"
            element={<Contactus toggelDarkMode={toggelDarkMode} />}
          />
					          <Route
            path="register-login-mongodb-server-react/register"
            element={<Register toggelDarkMode={toggelDarkMode} />}
          />
					          <Route
            path="/register-login-mongodb-server-react/login"
            element={<Login toggelDarkMode={toggelDarkMode} />}
          />
          <Route
            path="*"
            element={<Page404 toggelDarkMode={toggelDarkMode} />}
          />
          <Route
            path="/register-login-mongodb-server-react/detail/:id"
            element={<Detail toggelDarkMode={toggelDarkMode} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
