import React, { useEffect, useState } from "react";
import PostCard from "./Post/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getBackendPostCards } from "./actions/posts.js"

function Home() {
  const postCards = useSelector(st => st.titles);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(function() {
    async function getPostCards() {
      await dispatch(getBackendPostCards());
      setLoaded(true);
    }
    if (!loaded) getPostCards();
  }, [dispatch, loaded])

  if (!loaded) return <p>Loading, just a moment...</p>
  console.log(postCards)
  const PostComponents = postCards.map(card => (
    <PostCard
      id={card.id}
      key={card}
      title={card.title}
      description={card.description}
    />
  ));

  return (
    <div>
      <ul>{PostComponents}</ul>
    </div>
  );
}

export default Home;