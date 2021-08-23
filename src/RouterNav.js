import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from "./Post/PostDetail";
import PostForm from "./Post/PostForm";
import Home from "./Home";
import "./NavHeader.css";

let samplePost = {1: {
  title: "Welcome to Microblog",
  description: "this is what a post looks like",
  body: "Posts can be about whatever you want.",
  comments: []
}};
export default function RouterNav() {


  // const [posts, setPosts] = useState(samplePost)
  // const addPost = (formData) => {
  //   const tempPosts = posts;
  //   tempPosts[uuidv4()] = formData;
  //   setPosts(tempPosts)
  // }

  // const addComment = (formData) => {

  //   setPosts(tempPosts)
  // }
  return (
    <div className="RouterNav">
      <BrowserRouter>
        <div className="NavHeader">
          <span id="navTitle">Microblog</span>
          <span>Are you just another cog in the blog?</span>
          <Link className="navLink" to="/">Blog</Link>
          <Link className="navLink" to="/new">Add a new post</Link>
        </div>
        <Switch>
          <Route path="/new">
            <PostForm defaultVals={{title: "",description: "",body: ""}} title={"New Post"}/>
          </Route>
          <Route path="/:postid">
            <PostDetail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route>
            <p>Sorry, the page you are looking for does not exist.</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}