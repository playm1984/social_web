import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag_list: [
    "#kazakh",
    "#kazakhstan",
    "#kazakhgirl",
    "#kazakhgirls",
    "#kazakhboy",
    "#nature",
    "#naturelovers",
    "#pretty",
    "#nice",
    "#photooftheday",
    "#weather",
    "#day",
    "#instafood",
    "#food",
    "#foodie",
    "#foodgasm",
    "#foodpics",
  ],
  posts: [],
};

const PostSlice = createSlice({
  name: "PostSlice",
  initialState,
  reducers: {
    // reducer for post
    addNewPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    toggleLikedPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload ? { ...post, like: !post.like } : post
      );
    },

    // reducer for comment
    addNewComment: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.idPost
          ? { ...post, comments: [...post.comments, action.payload.comment] }
          : post
      );
    },
    removeComment: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.idPost) {
          const newComments = post.comments.filter(
            (comment) => comment.id !== action.payload.idComment
          );
          return { ...post, comments: newComments };
        } else {
          return post;
        }
      });
    },
    toggleLikeComment: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.idPost) {
          const newComments = post.comments.map((comment) =>
            comment.id === action.payload.idComment
              ? { ...comment, like: !comment.like }
              : comment
          );
          return { ...post, comments: newComments };
        } else {
          return post;
        }
      });
    },
  },
});

export const {
  addNewPost,
  toggleLikedPost,
  addNewComment,
  removeComment,
  toggleLikeComment,
} = PostSlice.actions;

export default PostSlice.reducer;
