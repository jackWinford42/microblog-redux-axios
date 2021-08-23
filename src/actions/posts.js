import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


export function getBackendPost(id) {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(response.data));
  };
}

function getPost(post) {
  return {
    type: "GET_POST",
    post,
  };
}

export function addBackendPost(title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    return dispatch(addPost(response.data));
  };
}

function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

export function removeBackendPost(id) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

function removePost(postId) {
  return {
    type: "REMOVE_POST",
    postId
  };
}

export function updateBackendPost(id, title, description, body) {
  return async function (dispatch) {
    const response = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    return dispatch(updatePost(response.data));
  };
}

function updatePost(post) {
  return {
    type: "UPDATE_POST",
    post,
  };
}

export function addVote(id, direction) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, response.data.votes));
  };
}

function vote(postId, votes) {
  return {
    type: "VOTE",
    postId: postId,
    votes: votes,
  };
}

export function removeBackendComment(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}

function removeComment(postId, commentId) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    commentId,
  };
}

export function addBackendComment(postId, text) {
  return async function (dispatch) {
    const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
    return dispatch(addComment(postId, result.data));
  };
}

function addComment(postId, comment) {
  return { 
    type: "ADD_COMMENT",
    postId, comment
  };
}

export function getBackendPostCards() {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}`);
    return dispatch(getPostCards(response.data));
  };
}

function getPostCards(titles) {
  return {
    type: "GET_TITLES",
    titles,
  };
}