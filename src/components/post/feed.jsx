import React, { useContext } from "react";
import { config } from "../../api/url";
import AuthContext from "../../auth/auth-context";
import ListPost from "../../constant/posts-cts";

export const Feed = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div>
        <section id="new-post" className="p-1 bg-white mt-3">
          <img
            src={config.URL_PHOTOS + currentUser.avatar}
            className="img-circle border m-2"
            width={50}
            height={50}
            alt="avatar"
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
