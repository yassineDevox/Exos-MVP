import React from "react";

export default Header_LT = () => {
  return (
    <header className="border d-flex justify-content-between p-1 sticky-top bg-white">
      <div className="left d-flex ms-2">
        {/* #e7f3ff bgC when click icolor : #f0f2f5 */}
        <div className="circle-icon border">
          {" "}
          <i className="fab fs-2 fab fa-etsy" />
        </div>
        <div className=" search border">
          {" "}
          <input type="text" /> <i className="fas fs-6 fa-search" />
        </div>
        <div className="circle-icon d-md-none">
          <i className="fas fs-2 fa-bars" />
          <div className="menu border p-2 d-none">
            <div className="d-flex align-items-center">
              <img src="./imgs/y.jpg" className="sm-avatar" alt="avatar" />
              <div className="user-info ms-1">
                <h6>Yassine Devs</h6>
              </div>
            </div>
            <div className="setting-link m-1 p-1">
              <img src="./imgs/home.png" className="link-icon" alt="avatar" />
              <span> Home</span>
            </div>
            <div className="setting-link m-1 p-1">
              <img src="./imgs/help.png" className="link-icon" alt="avatar" />
              <span> Support Exos</span>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="d-md-flex d-none nav">
          <li className="active">
            <i className="fas fa-home" /> <span className="lead ">Home</span>{" "}
          </li>
          <li>
            <i className="fas fa-user-friends" />{" "}
            <span className="lead ">Friends</span>{" "}
          </li>
          <li>
            <i className="fas fa-heart" />{" "}
            <span className="lead ">Exos Help</span>{" "}
          </li>
        </ul>
      </nav>
      <div className="right d-flex me-2">
        <div className="d-md-flex align-items-center d-none">
          <img src="./imgs/y.jpg" className="sm-avatar" alt="avatar" />
          <div className="user-info me-2 mt-1">
            <h6>Yassine Dev</h6>
          </div>
        </div>
        <button
          className="circle-icon border"
          data-bs-toggle="modal"
          data-bs-target="#newPostModal"
        >
          {" "}
          <i className="fas fs-6 fa-plus" />
        </button>
        {/* <button class="circle-icon border"> <i class="fab fs-6 fa-facebook-messenger"></i></button> */}
        <button className="circle-icon border">
          {" "}
          <i className="fas fs-6 fa-bell" />
        </button>
        <button className="circle-icon border">
          {" "}
          <i className="fas fs-6 fa-caret-down" />
        </button>
        <div className="setting border d-none">
          <div className="d-flex align-items-center">
            <img src="./imgs/y.jpg" className="avatar" alt="avatar" />
            <div className="user-info ms-2">
              <h5>Yassine Devs</h5>
              <p className="text-secondary small">Voir profile ?</p>
            </div>
          </div>
          <hr style={{ width: "90%", marginTop: "-3px" }} className="mx-auto" />
          <div className="setting-link m-2 p-2">
            <div className="icon-c">
              <i className="fas fa-user-cog" />
            </div>
            <span>
              Settings <br />
              <small className="text-secondary fw-normal">
                Modifier votre compte ?
              </small>
            </span>
          </div>
          {/* here i will display study's level related less than the current one  */}
          <div className="setting-link m-2 p-2">
            <div className="icon-c">
              <i className="fas fa-sign-out-alt" />
            </div>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </header>
  );
};