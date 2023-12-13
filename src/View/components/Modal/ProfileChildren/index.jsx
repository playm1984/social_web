import { useState } from "react";
import ImageSvg from "../../ImageSVG/index";
import { useDispatch } from "react-redux";
import { changeUserProfile } from "../../../../Buisnes/Slices/UserSlice";
import { localStorageAction } from "../../../../Buisnes/localStorageAction";

import style from "./ProfileChildren.module.css";

const ProfileChildren = ({ profile, onClose }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    avatar: profile.avatar,
    name: profile.name,
    email: profile.email,
    login: profile.login,
    password: profile.password,
    id: profile.id,
  });
  const [isEdit, setIsEdit] = useState({
    name: false,
    email: false,
    login: false,
    password: false,
  });
  const [profileVue, setProfileVue] = useState(false);
  const avatarCollection = [
    "Avatar1",
    "Avatar2",
    "Avatar3",
    "Avatar4",
    "Avatar5",
    "Avatar6",
    "Avatar7",
    "Avatar8",
    "Avatar9",
  ];
  const editInputProfile = [
    { title: "Name", params: "name" },
    { title: "Email", params: "email" },
    { title: "Login", params: "login" },
    { title: "Password", params: "password" },
  ];

  const changeProfile = (params) => {
    setUser({ ...user, [params.name]: params.data });
  };

  const editMode = (key) => {
    setIsEdit({ ...isEdit, [key]: !isEdit[key] });
  };

  const handleProfileChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const updateUserProfile = () => {
    dispatch(changeUserProfile(user));
    localStorageAction.editUserProfile(user);
    onClose();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.profileInfo}>
        <div className={style.avatarWrapper}>
          <ImageSvg
            config={{
              icon: `${user.avatar}`,
              size: 60,
              fill: "",
              stroke: "",
            }}
          />
          <button
            className={style.editAvatarBtn}
            onMouseEnter={() => setProfileVue(true)}
          >
            <ImageSvg
              config={{
                icon: "Edit",
                size: 8,
                fill: "black",
                stroke: "",
              }}
            />
          </button>

          {profileVue && (
            <div
              className={style.changeProfileVue}
              onMouseLeave={() => setProfileVue(false)}
            >
              {avatarCollection.map((avatar) => (
                <div className={style.changeAvatar} key={avatar}>
                  <button
                    className={style.changeAvatarBtn}
                    onClick={() =>
                      changeProfile({ data: avatar, name: "avatar" })
                    }
                  >
                    <ImageSvg
                      config={{
                        icon: `${avatar}`,
                        fill: "",
                        stroke: "",
                        size: 22,
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={style.info}>
          {editInputProfile.map((input) => (
            <div className={style.info_line} key={input.params}>
              <p>
                {input.title}:{" "}
                {isEdit[input.params] ? (
                  <input
                    autoFocus
                    type="text"
                    placeholder={`new ${input.params}`}
                    name={input.params}
                    onChange={handleProfileChange}
                  />
                ) : (
                  <span>{profile[input.params]}</span>
                )}
              </p>
              <button
                className={style.editBtn}
                onClick={() => editMode(input.params)}
              >
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
          ))}
        </div>
      </div>

      <button
        disabled={false}
        className={style.profileSaveBtn}
        onClick={updateUserProfile}
      >
        save
      </button>
    </div>
  );
};

export default ProfileChildren;
