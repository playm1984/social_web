import React from "react";

const SignOutSVG = (props) => {
  return (
    <>
      <svg
        // fill={props.fill}
        height={`${props.size}px`}
        width={`${props.size}px`}
        // stroke={props.stroke}
        viewBox="0 0 24 24"
        id="sign-out-alt-4"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        class="icon flat-color"
      >
        <path
          id="secondary"
          d="M9,11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H9a1,1,0,0,0,0-2Z"
          fill={props.fill}
        ></path>
        <path
          id="primary"
          d="M20.48,3.84l-6-1.5A2,2,0,0,0,12,4.28V5H10A2,2,0,0,0,8,7V8a1,1,0,0,0,2,0V7h2V17H10V16a1,1,0,0,0-2,0v1a2,2,0,0,0,2,2h2v.72a2,2,0,0,0,2.48,1.94l6-1.5A2,2,0,0,0,22,18.22V5.78A2,2,0,0,0,20.48,3.84Z"
          fill={props.stroke}
        ></path>
      </svg>
    </>
  );
};

export default SignOutSVG;
