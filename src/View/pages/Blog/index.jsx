import { useState } from "react";

import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import AddPostChildren from "../../components/Modal/AddPostChildren";

import blog from "./Blog.module.css";

const Blog = () => {
  const [modalAddPost, setModalAddPost] = useState(false);

  const closeModal = () => {
    setModalAddPost(false);
  };

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
