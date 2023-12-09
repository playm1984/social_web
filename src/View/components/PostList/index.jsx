import React from "react";
import { useSelector } from "react-redux";

import PostItem from "../PostItem";

import postList from "./PostList.module.css";

const PostList = () => {
  const { posts } = useSelector((state) => state.PostSlice);
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
