import { useState, useEffect, useLayoutEffect } from "react";
import ImageSvg from "../../components/ImageSVG";

import { users } from "../../../assets/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserProfile,
  getUsersFromLS,
} from "../../../Buisnes/Slices/UserSlice";
import { localStorageAction } from "../../../Buisnes/localStorageAction";

import style from "./Auth.module.css";

const Auth = () => {
  const [isShow, setIsShow] = useState(false);
  const [credentials, setCredentials] = useState({
    login: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usersDB } = useSelector((state) => state.UserSlice);

  const showPassword = (event) => {
    event.preventDefault();
    setIsShow(!isShow);
  };

  const handleChange = (event) => {
    if (event.target.name === "remember") {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.checked,
      });
    } else {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };

  const henadleSubmit = (event) => {
    event.preventDefault();

    let isAuth = false;
    let userProfile = null;

    usersDB.forEach((user) => {
      if (
        user.login === credentials.login &&
        user.password === credentials.password
      ) {
        isAuth = true;
        userProfile = user;
      }
    });

    if (isAuth) {
      if (credentials.remember) {
        localStorageAction.setDataLocalStorage(
          localStorageAction.AUTH_USER,
          userProfile.id
        );
      }
      dispatch(changeUserProfile(userProfile));
      navigate("/main");
    }

    setCredentials({
      login: "",
      password: "",
      remember: false,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("users")) {
      const users = JSON.parse(localStorage.getItem("users"));
      dispatch(getUsersFromLS(users));
    }
  }, []);

  useLayoutEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  return (
    <div className={style.auth_page}>
      <form onSubmit={henadleSubmit} className={style.auth_form}>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={credentials.login}
          onChange={handleChange}
        />
        <div className={style.auth_password_wrapper}>
          <input
            type={isShow ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button
            className={style.auth_show_password_btn}
            onClick={showPassword}
          >
            <ImageSvg
              config={{
                icon: `${isShow ? "EyeOpen" : "EyeClose"}`,
                size: 20,
                fill: "black",
                stroke: "black",
              }}
            />
          </button>
        </div>
        <label>
          <input
            type="checkbox"
            name="remember"
            checked={credentials.remember}
            onChange={handleChange}
          />
          Remember Me
        </label>
        <input type="submit" value="Войти" />
      </form>
    </div>
  );
};

export default Auth;
