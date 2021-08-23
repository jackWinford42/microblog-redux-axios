import React, { useState, useEffect } from "react";
import {
  Button
} from 'reactstrap';
import {
  useParams,
  useHistory
} from "react-router-dom";
import {
  removeBackendPost,
  updateBackendPost,
  //addVote,
  addBackendComment,
  removeBackendComment
} from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import Comments from "../Comment/Comments"
import PostForm from "./PostForm";

export default function PostDetail() {
  const { postid } = useParams();
  let history = useHistory();
  let posts = useSelector(st => st.posts);
  console.log(posts)
  let post = useSelector(st => st.posts[postid]);
  console.log(post)
  const [displayForm, setDisplayForm] = useState(false)
  const dispatch = useDispatch();

  useEffect(function getPostData() {
    async function getPost() {
      dispatch(getBackendPost(postid));
    }
    if (!post) getPost();
  }, [dispatch, postId, post])
  const edit = () => {
    setDisplayForm(true) 
  }

  const deletePost = () => {
    dispatch(removeBackendPost(postid));
    history.push("/");
  }

  const editPost = (formData) => {
    dispatch(updateBackendPost(
      postid,
      formData
    ));
    setDisplayForm(false);
  }

  function addComment(formData) {
    // const tempPosts = posts;
    // console.log(formData)
    // console.log(formData.postid)
    // console.log(tempPosts[formData.postid])
    // tempPosts[formData.postid].comments.push({text: formData.text, id: formData.id});
    dispatch(addBackendComment({type: "ADD_COMMENT", postid: formData.postid, text: formData.text}));
  }

  /** Handle deleting a comment in backend. */
  function deleteComment(commentId) {
    dispatch(removeBackendComment(postid, commentId));
  }
  const postDetail = (
    <div className="PostDetail">
      <div>
        <h3>{post.title}</h3>
        <Button onClick={edit}>Edit</Button>
        <Button onClick={deletePost}>Delete</Button>
      </div>
      <span><i>{post.description}</i></span>
      <p>{post.body}</p>
      <Comments comments={post.comments} deleteComment={deleteComment} createComment={addComment} postid={postid}/>
    </div>
  )

  const postForm = (
    <PostForm createPost={editPost} defaultVals={{
      title: post.title,
      description: post.description,
      body: post.body}}
      title={"Edit Post"}/>
  )
  return (
    <>
      {displayForm ? postForm : postDetail}
    </>
  )
}