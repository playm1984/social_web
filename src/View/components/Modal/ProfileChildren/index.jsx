import React from "react";
import ImageSvg from "../../ImageSVG/index";

import style from "./ProfileChildren.module.css";

const ProfileChildren = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.avatarWrapper}>
        <ImageSvg
          config={{
            icon: "Avatar7",
            size: 60,
            fill: "",
            stroke: "",
          }}
        />
        <button className={style.editAvatarBtn}>
          <ImageSvg
            config={{
              icon: "Edit",
              size: 8,
              fill: "black",
              stroke: "",
            }}
          />
        </button>
      </div>

      <div className={style.info}>
        <div className={style.info_line}>
          <p>
            Name: <span>Max</span>
          </p>
          <button className={style.editBtn}>
            <ImageSvg
              config={{
                icon: "Edit",
                size: 10,
                fill: "black",
                stroke: "",
              }}
            />
          </button>
        </div>
        <div className={style.info_line}>
          <p>
            Email: <span>Max@test.com</span>
          </p>
          <button className={style.editBtn}>
            <ImageSvg
              config={{
                icon: "Edit",
                size: 10,
                fill: "black",
                stroke: "",
              }}
            />
          </button>
        </div>
        <div className={style.info_line}>
          <p>
            Login: <span>max12345</span>
          </p>
          <button className={style.editBtn}>
            <ImageSvg
              config={{
                icon: "Edit",
                size: 10,
                fill: "black",
                stroke: "",
              }}
            />
          </button>
        </div>
        <div className={style.info_line}>
          <p>
            Password: <span>qckhbbuy</span>
          </p>
          <button className={style.editBtn}>
            <ImageSvg
              config={{
                icon: "Edit",
                size: 10,
                fill: "black",
                stroke: "",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileChildren;
