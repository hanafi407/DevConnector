import axios from "axios";
import { DELETE_POST, GET_POSTS, POSTS_ERROR, UPDATE_LIKES } from "./types";
import { setAlert } from "./alert";

//get posts

export const getPost = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.message.statusText, status: err.response.status },
    });
  }
};

//add likes
export const addLikes = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {id,likes:res.data},
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.message.statusText, status: err.response.status },
    });
  }
};

//remove likes
export const removeLikes = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.message.statusText, status: err.response.status },
    });
  }
};

//delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload:id,
    });

    dispatch(setAlert('Post Removed','success'))
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.message.statusText, status: err.response.status },
    });
  }}