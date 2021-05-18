import React from "react";
import ListPost from "../../constant/posts-cts";
import imgMock from "./../../assets/images/y.jpg";

export const Feed = () => {
  return (
    <>
      <div>
        <section id="new-post" className="p-1 bg-white mt-3">
          <img
            src={imgMock}
            className="img-circle border m-2"
            width={50}
            height={50}
            alt
          />
          <button className="btn text-start"> Publier Un Exercice </button>
        </section>
        <section id="posts" className="mt-1">
          <ListPost />
        </section>
      </div>
    </>
  );
};

export default Feed;