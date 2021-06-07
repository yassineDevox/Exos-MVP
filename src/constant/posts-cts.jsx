import React,{useContext} from "react";
import  PostItem  from "../components/post/item";
import PostContext from "../shared/context/post.context";


export default function ListPost() {

  const {posts} = useContext(PostContext)
  let postsContent = <p>loading ...</p> ;
  if(posts!=undefined) postsContent = posts.map((p, i) => <PostItem key={i} post={p} />)

  return postsContent;
}

