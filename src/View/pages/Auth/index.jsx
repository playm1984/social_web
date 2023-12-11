import { useState } from "react";
import ImageSvg from "../../components/ImageSVG";

import style from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={style.auth_page}>
      <form onSubmit={() => true} className={style.auth_form}>
        <input type="text" name="login" placeholder="Login" />
        <div className="">
          <input type="password" name="password" placeholder="Password" />
          <ImageSvg
            config={{
              icon: "EyeClose",
              size: 20,
              fill: "black",
              stroke: "black",
            }}
          />
        </div>
        <input type="checkbox" name="remember" />
      </form>
    </div>
  );
};

export default Auth;
