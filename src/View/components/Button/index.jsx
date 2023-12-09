import React from "react";

import button from "./Button.module.css";

const Button = ({ config }) => {
  return (
    <button className={button[config.className]} onClick={config.onClick}>
      {config.text}
    </button>
  );
};

export default Button;
