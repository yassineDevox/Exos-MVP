import axios from "axios";
import React, { Component } from "react";
import { config } from "../api/url";
import UserModel from "../models/model-user";

//create authContext from React
const AuthContext = React.createContext();

export class AuthProvider extends Component {
  // data shared
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  componentDidMount() {}

  register = (newUser) => {
    newUser.points = 0;
    newUser.avatar = null;
    newUser.userId = null;
    newUser.dateCreation=null;
    return axios.post(config.url.AUTH.SIGNUP, newUser);
  };

  login = (email, password) => {
    return axios.post(config.url.AUTH.SIGNIN, { email, password });
  };

  saveUserSession = (userInfo,accessToken) =>{
    
    this.setState( { currentUser : new UserModel(userInfo) });
    window.localStorage.setItem("auth-token",JSON.stringify(accessToken));
  }

  logout = () => {
    console.log("logout");
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          currentUser: this.state.currentUser,
          login: this.login,
          logout: this.logout,
          register: this.register,
          saveUserSession:this.saveUserSession
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;
