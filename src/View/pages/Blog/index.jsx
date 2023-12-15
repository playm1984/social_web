import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsersFromLS, searchUsers } from "../../../Buisnes/Slices/UserSlice";

import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import AddPostChildren from "../../components/Modal/AddPostChildren";
import { setAuth } from "../../../assets/setAuth";

import blog from "./Blog.module.css";

const Blog = () => {
  const [modalAddPost, setModalAddPost] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalAddPost(false);
  };

  useEffect(() => {
    const isAuth = setAuth();

    if (!isAuth) {
      navigate("/");
    } else {
      dispatch(searchUsers(isAuth));
    }
  }, []);

  useLayoutEffect(() => {
    if (localStorage.getItem("users")) {
      const users = JSON.parse(localStorage.getItem("users"));
      dispatch(getUsersFromLS(users));
    }
  }, []);

  return (
    <div className={blog.app_page}>
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
          <AddPostChildren close={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Blog;
