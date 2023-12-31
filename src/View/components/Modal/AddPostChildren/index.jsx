import { useState, useEffect } from "react";
import { addNewPost } from "../../../../Buisnes/Slices/PostSlice";
import { useSelector, useDispatch } from "react-redux";

import style from "./AddPostChildren.module.css";

const AddPostChildren = ({ close }) => {
  const [titlePost, setTitlePost] = useState("");
  const [imagePost, setImagePost] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [tags, setTags] = useState([]);

  const { tag_list } = useSelector((state) => state.PostSlice);
  const { profile } = useSelector((state) => state.UserSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (titlePost.length) {
      setErrorTitle(false);
    }
  }, [titlePost]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (titlePost.trim().length) {
      setErrorTitle(false);
      const newPost = {
        id: new Date().getTime(),
        author: profile.name,
        create_date: new Date().toLocaleDateString(),
        image: imagePost.trim(),
        title_post: titlePost.trim(),
        rait: Math.floor(1 + Math.random() * (5 + 1 - 1)),
        tags,
        like: false,
        comments: [],
      };
      dispatch(addNewPost(newPost));
      setTitlePost("");
      setTags([]);
      close(false);
    } else {
      setErrorTitle(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "imagePost") {
      setImagePost(event.target.value);
    } else {
      setTitlePost(event.target.value);
    }
  };

  const handleSelectChange = (event) => {
    if (!tags.includes(event.target.value)) {
      setTags([...tags, event.target.value]);
    }
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((elem) => elem !== tag);
    setTags(newTags);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form_addPost}>
        <div className={style.form_titlePost}>
          <input
            type="text"
            placeholder="Название поста"
            name="titlePost"
            value={titlePost}
            onChange={handleChange}
          />
          {errorTitle ? (
            <p className={style.form_titleErrorMessage}>обязательное поле</p>
          ) : null}
        </div>

        <div className={style.form_imagePost}>
          <input
            type="text"
            placeholder="Ссылка на изображения"
            name="imagePost"
            value={imagePost}
            onChange={handleChange}
          />
        </div>

        <select onChange={handleSelectChange}>
          <option value="hidden" hidden>
            Выберите тэги
          </option>
          {tag_list.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>

        <div className={style.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={style.tag}>
              {tag + "  "}
              <span
                className={style.tagRemoveBtn}
                onClick={() => removeTag(tag)}
              >
                x
              </span>
            </span>
          ))}
        </div>
        <input
          className={style.modalCloseBtn}
          type="submit"
          value="опубликовать"
        />
      </form>
    </>
  );
};

export default AddPostChildren;
