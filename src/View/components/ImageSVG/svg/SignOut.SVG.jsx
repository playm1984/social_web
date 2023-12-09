import React from "react";

const SignOut = (props) => {
  return (
    <>
      <svg
        height={`${props.size}px`}
        width={`${props.size}px`}
        viewBox="0 0 24 24"
        id="sign-out-alt-3"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        class="icon flat-color"
      >
        <path
          id="primary"
          d="M13.23,2.71a2,2,0,0,0-1.72-.37l-6,1.5A2,2,0,0,0,4,5.78V18.22a2,2,0,0,0,1.51,1.94l6,1.5a2,2,0,0,0,.48.06,2,2,0,0,0,1.23-.43A2,2,0,0,0,14,19.72V4.28A2,2,0,0,0,13.23,2.71Z"
          fill={props.fill}
        ></path>
        <path
          id="secondary"
          d="M18,4H15V20h3a2,2,0,0,0,2-2V6A2,2,0,0,0,18,4Z"
          fill={props.stroke}
        ></path>
      </svg>
    </>
  );
};

export default SignOut;
