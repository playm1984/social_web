import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import ImageSvg from "../ImageSVG";
import ProfileChildren from "../Modal/ProfileChildren";

import header from "./Header.module.css";

const Header = () => {
  const { profile } = useSelector((state) => state.UserSlice);
  const [modalProfile, setModalProfile] = useState(false);

  const closeModal = () => {
    setModalProfile(false);
  };

  return (
    <div className={header.wrapper}>
      <h1 className={header.name}>SocialWeb</h1>

      <div className={header.profile_btns}>
        <button
          className={header.profile}
          title="Профиль"
          onClick={() => setModalProfile(true)}
        >
          <ImageSvg
            config={{
              icon: `${profile.avatar}`,
              fill: "",
              stroke: "",
              size: 35,
            }}
          />
        </button>
        <button className={header.enter}>
          <ImageSvg
            config={{
              icon: "Setting",
              fill: "black",
              stroke: "",
              size: 40,
            }}
          />
        </button>
      </div>

      {modalProfile && (
        <Modal close={closeModal} modalTitle="my profile">
          <ProfileChildren
            profile={profile}
            onClose={() => setModalProfile(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;
