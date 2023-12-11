import React from "react";

// SVG collection
import Setting from "./svg/Setting.SVG";
import SignOut from "./svg/SignOut.SVG";
import SignIn from "./svg/SignIn.SVG";
import Delete from "./svg/Delete.SVG";
import Edit from "./svg/Edit.SVG";
import Heart from "./svg/Heart.SVG";
import Star from "./svg/Star.SVG";
import Close from "./svg/Close.SVG";
import Avatar1 from "./svg/AvatarIcon/Avatar1.SVG";
import Avatar2 from "./svg/AvatarIcon/Avatar2.SVG";
import Avatar3 from "./svg/AvatarIcon/Avatar3.SVG";
import Avatar4 from "./svg/AvatarIcon/Avatar4.SVG";
import Avatar5 from "./svg/AvatarIcon/Avatar5.SVG";
import Avatar6 from "./svg/AvatarIcon/Avatar6.SVG";
import Avatar7 from "./svg/AvatarIcon/Avatar7.SVG";
import Avatar8 from "./svg/AvatarIcon/Avatar8.SVG";
import Avatar9 from "./svg/AvatarIcon/Avatar9.SVG";
import EyeClose from "./svg/EyeClose.SVG";

const ImageSvg = ({ config }) => {
  const svg_collections = {
    Setting,
    SignOut,
    SignIn,
    Delete,
    Edit,
    Heart,
    Star,
    Close,
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
    EyeClose,
  };

  const ImageCofig = {
    fill: config.fill ? config.fill : "none",
    stroke: config.stroke ? config.stroke : "black",
    size: config.size ? config.size : 30,
  };

  const Icon = svg_collections[config.icon];

  return (
    <span>
      <Icon
        fill={ImageCofig.fill}
        stroke={ImageCofig.stroke}
        size={ImageCofig.size}
      />
    </span>
  );
};

export default ImageSvg;
