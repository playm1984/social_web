import React from "react";
import ImageSvg from "../ImageSVG";

import { useDispatch } from "react-redux";
import {
  removeComment,
  toggleLikeComment,
} from "../../../Buisnes/Slices/PostSlice";

import comments from "./Comments.module.css";

const Comments = ({ comment, idPost }) => {
  const dispatch = useDispatch();
  return (
    <div className={comments.wrapper}>
      <div className={comments.authorComment}>
        <ImageSvg
          config={{
            icon: "Avatar2",
            fill: "",
            stroke: "",
            size: 15,
          }}
        />
        <p className={comments.authorName}>{comment.authorComment}</p>
      </div>
      <div className={comments.comment}>
        <div className={comments.likePost}>
          <button
            className={comments.likeBtn}
            onClick={() =>
              dispatch(toggleLikeComment({ idPost, idComment: comment.id }))
            }
          >
            <ImageSvg
              config={{
                icon: "Heart",
                stroke: comment.like ? "red" : "black",
                fill: comment.like ? "red" : "none",
                size: 10,
              }}
            />
          </button>
          <p className={comments.message}>"{comment.message}"</p>
        </div>
        <div className={comments.actionBtns}>
          <button className={comments.actionBtn}>
            <ImageSvg
              config={{
                icon: "Edit",
                fill: "rgb(134, 134, 134)",
                stroke: "rgb(134, 134, 134)",
                size: 12,
              }}
            />
          </button>
          <button
            className={comments.actionBtn}
            onClick={() =>
              dispatch(removeComment({ idPost, idComment: comment.id }))
            }
          >
            <ImageSvg
              config={{
                icon: "Delete",
                stroke: "rgb(134, 134, 134)",
                size: 16,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
