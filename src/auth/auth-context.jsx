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

  // onrefreach the pages i think yeah here i will initialize again the user's infos 
  componentDidMount() {
    if(JSON.parse(window.localStorage.getItem('auth-token'))){
      this.setState({currentUser:JSON.parse(window.localStorage.getItem("user-auth"))});
    }
  }

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
    window.localStorage.setItem("user-auth",JSON.stringify(userInfo));
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
