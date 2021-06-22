import React, { useContext } from "react";
import AvatarMock from "./../assets/images/y.jpg";
import homeMock from "./../assets/images/home.png";
import helpMock from "./../assets/images/help.png";
import AuthContext from "../auth/auth-context";
import Avatar from "react-avatar";
import { config } from "../api/url";

export const Header_LT = () => {
  const { logout, currentUser } = useContext(AuthContext);
  return (
    <header className="border d-flex justify-content-between p-1 sticky-top bg-white">
      <div className="left d-flex ms-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYj3jlYEXUKhVenDORVaJ6ixLZcriOXJ0Vg&amp;usqp=CAU"
          width="40"
          height="40"
          className="av"
          alt="logo"
        />
        <div className="search border">
          {" "}
          <input type="text" placeholder="Search For Something ?" />{" "}
          <i className="fas fs-6 fa-search" />
        </div>
        <div className="circle-icon d-md-none">
          <i className="fas fs-2 fa-bars" />
          <div className="menu border p-2 d-none">
            <div className="d-flex align-items-center">
              {currentUser.avatar != null ? (
                <img
                  src={config.URL_PHOTOS + currentUser.avatar}
                  alt="img"
                  className="sm-avatar"
                />
              ) : (
                <Avatar
                  name={currentUser.firstName + " " + currentUser.lastName}
                  round={true}
                  size="36"
                />
              )}
              <div className="user-info ms-1">
                <h6>{currentUser.firstName + " " + currentUser.lastName}</h6>
              </div>
            </div>
            <div className="setting-link m-1 p-1">
              <img src={homeMock} className="link-icon" alt="avatar" />
              <span> Home</span>
            </div>
            <div className="setting-link m-1 p-1">
              <img src={helpMock} className="link-icon" alt="avatar" />
              <span> Support Exos</span>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="d-md-flex d-none nav">
          <li className="active">
            <i className="fas fa-home" />
            <span className="lead "> Home</span>{" "}
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
          {currentUser.avatar != null ? (
            <img
              src={config.URL_PHOTOS + currentUser.avatar}
              alt="img"
              className="sm-avatar"
            />
          ) : (
            <Avatar
              name={currentUser.firstName + " " + currentUser.lastName}
              round={true}
              size="36"
            />
          )}
          <div className="user-info me-2 mt-1">
            <h6>{currentUser.firstName + " " + currentUser.lastName}</h6>
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
            <img src={AvatarMock} className="avatar" alt="avatar" />
            <div className="user-info ms-2">
            <h5>{currentUser.firstName + " " + currentUser.lastName}</h5>

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

export default Header_LT;
