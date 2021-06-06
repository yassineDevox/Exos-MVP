import React from "react";
import PropTypes from "prop-types";
import PostModel from "../../models/model-post";
import Avatar from "react-avatar";
import { config } from "../../api/url";

export const PostItem = ({ post }) => {
  return (
    <article className="p-2 bg-white ">
      <div className="post-header d-flex justify-content-between align-items-center">
        <div className="d-flex">
          {post.avatar != null ? (
            <img
              src={config.URL_PHOTOS + post.avatar}
              alt="img"
              className="img-circle border m-1"
              height={40}
              width={40}
            />
          ) : (
            <Avatar
              style={{ marginLeft: "6px", marginRight: "6px" }}
              name={post.firstName + " " + post.lastName}
              round={true}
              size="45"
            />
          )}

          <div className="p-1">
            <span className="text-capitalize">
              {post.firstName + " " + post.lastName}
            </span>
            <br />
            <small className="text-secondary">{post.dateCreation}</small>
            <br />
          </div>
        </div>
        <div className="post-setting-container">
          <div className="icon-circle">
            <i className="fs-5 fas fa-ellipsis-h" />
          </div>
          <div className="post-setting">
            <ul className="list-group">
              <li className="list-group-item" style={{ width: 120 }}>
                Engistrer <i className="fas fa-save" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="post-body">
        <p className="p-2 fs-6 pb-0">{post.description}</p>
        <div style={{height:"240px",overflow:"hidden"}}>
          <img
            src={config.URL_PHOTOS + post.content}
            className="img-fluid mb-1"
            alt="exerice1"
          />
        </div>
      </div>
      <div className="post-footer d-flex justify-content-between">
        <div className="reactions">
          <button className="btn btn-sm">
            <i className="far fa-thumbs-up" /> {post.numberLikes}
          </button>
          <button className="btn btn-sm">
            <i className="far fa-lightbulb" /> {post.numberSolution}
          </button>
          <button className="btn btn-sm">
            <i className="far fa-comment" /> {post.numberComment}
          </button>
        </div>
        <button className="room-btn">Consulter</button>
      </div>
    </article>
  );
};

PostItem.prototype = {
  post: PropTypes.instanceOf(PostModel),
};

export default PostItem;
