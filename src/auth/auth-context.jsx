import axios from "axios";
import React, { Component } from "react";
import { config } from "../api/url";

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

  componentDidMount(){
    
  }


  register = (newUser) => {
    console.log(newUser);
    return axios.post(config.url.AUTH.SIGNUP,newUser);
  };

  login = (email,password) => {
    console.log(email,password);
    return axios.post(config.url.AUTH.SIGNIN,{email,password});
  };

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
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;