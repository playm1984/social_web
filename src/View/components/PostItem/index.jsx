import React, { useState } from "react";
import Comments from "../Comments";
import ImageSvg from "../ImageSVG";

import { useDispatch } from "react-redux";
import {
  toggleLikedPost,
  addNewComment,
} from "../../../Buisnes/Slices/PostSlice";

import postItem from "./PostItem.module.css";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const [isCreateComment, setIsCreateComment] = useState(false);
  const [valueComment, setValueComment] = useState("");

  const createNewComment = (event) => {
    if (event.keyCode === 13) {
      if (valueComment.trim().length) {
        const comment = {
          id: new Date().getTime(),
          authorComment: "Max",
          message: valueComment,
          like: false,
        };
        dispatch(addNewComment({ comment, idPost: post.id }));
        setIsCreateComment(!isCreateComment);
        setValueComment("");
      } else {
        setIsCreateComment(!isCreateComment);
      }
    }
  };

  const handleChangeComment = (event) => {
    setValueComment(event.target.value);
  };

  return (
    <div className={postItem.wrapper}>
      <div className={postItem.top}>
        <div className={postItem.profile}>
          <ImageSvg
            config={{
              icon: "Avatar2",
              fill: "",
              stroke: "",
              size: 20,
            }}
          />
          <p>{post.author}</p>
        </div>
        <p>{post.create_date}</p>
      </div>
      <div className={postItem.image_wrapper}>
        <div className={postItem.image}></div>
      </div>
      <div className={postItem.bottom}>
        <p className={postItem.title}>{post.title_post}</p>
        <div className={postItem.raitLike}>
          <div className={postItem.rait}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <ImageSvg
                  key={i}
                  config={{
                    icon: "Star",
                    fill: `${
                      i + 1 > post.rait
                        ? "rgb(220, 220, 220)"
                        : "rgb(180, 180, 180)"
                    }`,
                    stroke: `${
                      i + 1 > post.rait
                        ? "rgb(140, 140, 140)"
                        : "rgb(100, 100, 100)"
                    }`,
                    size: 14,
                  }}
                />
              ))}
          </div>

          <button
            className={postItem.likeBtn}
            onClick={() => dispatch(toggleLikedPost(post.id))}
          >
            <ImageSvg
              config={{
                icon: "Heart",
                stroke: post.like ? "red" : "black",
                fill: post.like ? "red" : "none",
                size: 20,
              }}
            />
          </button>
        </div>
      </div>
      <div className={postItem.tags_comment}>
        <div className={postItem.tags}>
          {post.tags.map((tag, i) => (
            <span key={i} className={postItem.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="">
          {isCreateComment ? (
            <input
              autoFocus
              type="text"
              placeholder="Напишите комментарий"
              className={postItem.inputCreateComment}
              onChange={handleChangeComment}
              onKeyDown={createNewComment}
              onBlur={() => setIsCreateComment(!isCreateComment)}
            />
          ) : (
            <button
              className={postItem.addCommentBtn}
              title="Создать комментарий"
              onClick={() => {
                setIsCreateComment(!isCreateComment);
              }}
            >
              <ImageSvg
                config={{
                  icon: "Edit",
                  stroke: "black",
                  fill: "black",
                  size: 14,
                }}
              />
            </button>
          )}
        </div>
      </div>

      {post.comments.length ? (
        <div className={postItem.commets}>
          <p className={postItem.commetsTitle}>Comments:</p>
          {post.comments.map((comment) => (
            <Comments key={comment.id} comment={comment} idPost={post.id} />
          ))}
        </div>
      ) : null}

      <div className={postItem.separateLine}></div>
    </div>
  );
};

export default PostItem;
