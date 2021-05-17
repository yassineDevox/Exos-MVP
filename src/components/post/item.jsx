import React from 'react'

export const PostItem = (props) => {
    return (
        <article className="p-2 bg-white ">
            <div className="post-header d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img
                  src="./imgs/y.jpg"
                  alt="img"
                  className="img-circle border m-1"
                  width={50}
                />
                <div className="p-1">
                  <span>{props.userFullName}</span>
                  <br />
                  <small className="text-secondary">{props.timePublication}</small>
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
              <p className="p-2 fs-6 pb-0">
               {props.PostDescription}
              </p>
              <img
                src="./imgs/exerice1.PNG"
                className="img-fluid mb-1"
                alt="exerice1"
              />
            </div>
            <div className="post-footer d-flex justify-content-between">
              <div className="reactions">
                <button className="btn btn-sm">
                  <i className="far fa-thumbs-up" />
                  {props.postNbLikes}
                </button>
                <button className="btn btn-sm">
                  <i className="far fa-lightbulb" />
                  {props.postNbSolutions}
                </button>
                <button className="btn btn-sm">
                  <i className="far fa-comment" />
                  {props.postNbComments}
                </button>
              </div>
              <button className="btn btn-primary btn-sm">Consulter</button>
            </div>
          </article>
    )
}
