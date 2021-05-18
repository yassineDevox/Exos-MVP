import React from "react";
import { PostItem } from "./item";
import PropTypes from 'prop-types';
import PostModel from "../../models/model-post";


export const Feed = (props) => {
  return (
    <>
      <div>
        <section id="new-post" className="p-1 bg-white mt-3">
          <img
            src="./imgs/y.JPG"
            className="img-circle border m-2"
            width={50}
            height={50}
            alt
          />
          <button className="btn text-start"> Publier Un Exercice </button>
        </section>
        <section id="posts" className="mt-1">
          {props.listPost.map((post,index) => (
            <PostItem post={post} key={index} />
          ))}
        </section>
      </div>
    </>
  );
};

Feed.propTypes = {
  listPost:PropTypes.arrayOf(
    PropTypes.instanceOf(PostModel)
  ),
}

export default Feed;