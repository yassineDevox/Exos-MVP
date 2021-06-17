import React, { useContext } from "react";
import PostItem from "../components/post/item";
import PostContext from "../shared/context/post.context";
import Spinner from "../shared/spinner";

export default function ListPost() {
  const { posts, loading } = useContext(PostContext);

  return (
    <>
      {
      loading ? (
        <Spinner />
      ) : (
        posts.map((p, i) => <PostItem key={i} post={p} />)
      )}
    </>
  );
}
