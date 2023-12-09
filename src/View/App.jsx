import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "../Buisnes/Slices/PostSlice";

import Header from "./components/Header";
import PostList from "./components/PostList";
import Button from "./components/Button";
import Modal from "./components/Modal";

import app from "./App.module.css";

const App = () => {
  const [modalAddPost, setModalAddPost] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [titlePost, setTitlePost] = useState("");
  const [tags, setTags] = useState([]);
  const { tag_list } = useSelector((state) => state.PostSlice);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTitlePost(event.target.value);
  };

  const handleSelectChange = (event) => {
    if (!tags.includes(event.target.value)) {
      setTags([...tags, event.target.value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (titlePost.trim().length) {
      setErrorTitle(false);
      const newPost = {
        id: new Date().getTime(),
        author: "Test User",
        create_date: new Date().toLocaleDateString(),
        image: "",
        title_post: titlePost.trim(),
        rait: Math.floor(1 + Math.random() * (5 + 1 - 1)),
        tags,
        like: false,
        comments: [],
      };
      dispatch(addNewPost(newPost));
      setTitlePost("");
      setTags([]);
      setModalAddPost(false);
    } else {
      setErrorTitle(true);
    }
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((elem) => elem !== tag);
    setTags(newTags);
  };

  const closeModal = () => {
    setTitlePost("");
    setTags([]);
    setModalAddPost(false);
  };

  useEffect(() => {
    if (titlePost.length) {
      setErrorTitle(false);
    }
  }, [titlePost]);

  return (
    <div className={app.app_page}>
      <Header />
      <Button
        config={{
          text: "new post",
          className: "btn-addPost",
          onClick: () => setModalAddPost(true),
        }}
      />
      <PostList />
      {modalAddPost && (
        <Modal close={closeModal} modalTitle="add new post">
          <form onSubmit={handleSubmit} className={app.form_addPost}>
            <div className={app.form_titlePost}>
              <input
                type="text"
                placeholder="Название поста"
                value={titlePost}
                onChange={handleChange}
              />
              {errorTitle ? (
                <p className={app.form_titleErrorMessage}>обязательное поле</p>
              ) : null}
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
            <div className={app.tags}>
              {tags.map((tag, i) => (
                <span key={i} className={app.tag}>
                  {tag + "  "}
                  <span
                    className={app.tagRemoveBtn}
                    onClick={() => removeTag(tag)}
                  >
                    x
                  </span>
                </span>
              ))}
            </div>
            <input
              className={app.modalCloseBtn}
              type="submit"
              value="опубликовать"
            />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default App;
