import React, { Component } from "react";
import { ForgetPass_UI } from "../components/forget-pass";
import { Signin_UI } from "../components/signin";
import { Signup_UI } from "../components/signup";
import UserModel from "../models/model-user";
import "./../assets/css/signin.css";
import AuthContext from "./auth-context";
import { isEmail } from "validator";

export default class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mdp: "",
      fp: "",
      newUser: new UserModel(),
      errIn: "",
      errUp: "",
      errFp: "",
      isLoading: false,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <main id="auth" className="row text-sm-center text-md-start p-sm-5">
          {/* Signin part */}
          <Signin_UI
            handleChange={this.onChangeInput}
            handleSubmit={this.onSubmitSignin}
            err={this.state.errIn}
            isLoading={this.state.isLoading}
          />
          {/* modals */}
          <Signup_UI
            handleChange={this.onChangeInput_UP}
            handleSubmit={this.onSubmitSignup}
            err={this.state.errUp}
            isLoading={this.state.isLoading}
            onExitedModal={this.clearStates}
          />
          <ForgetPass_UI
            handleChange={this.onChangeInput}
            handleSubmit={this.onSubmitForgetPassword}
            err={this.state.errFp}
            onExitedModal={this.clearStates}
          />
        </main>
        <p className="lead text-center fs-6 p-1">
          Bienvenu Chez Exos toute drois d'auteur est réservé @Copyright 2021
        </p>
      </div>
    );
  }

  clearStates = () => {
    this.setState({ errUp: "", errFp: "", newUser: new UserModel() });
    document.getElementById("signupForm").reset();
    document.getElementById("forgetPassForm").reset();
  };
  doForgetPassword = () => {
    alert("send verification link to this email : " + this.state.email);
  };

  onSubmitForgetPassword = (e) => {
    e.preventDefault();
    if (this.formIsValid()) this.doForgetPassword();
  };

  onChangeInput_UP = (e) => {
    //clear error message first
    this.setState({ errUp: "" });
    let u = this.state.newUser;
    u[e.target.name] = e.target.value;
    this.setState({ newUser: u });
  };

  onSubmitSignup = (e) => {
    e.preventDefault();
    if (this.formIsValid("UP")) this.doSignUp();
  };

  doSignUp = () => {
    this.setState({ isLoading: true });

    this.context
      .register(this.state.newUser)
      .then((data) => {
        this.setState({ isLoading: false });
        this.context.saveUserSession(data.userInfo);
        this.props.history.push("/home");
      })
      .catch((data) => {
        this.setState({ isLoading: false });
        //dealing with server side errors
        this.setState({ errUp: data.response.data.message });
      });
  };

  //-----signin
  doSignIn = () => {
    const { email, mdp } = this.state;

    this.setState({ isLoading: true });

    this.context
      .login(email, mdp)
      .then((response) => {
        this.setState({ isLoading: false });

        this.context.saveUserSession(response.data.userInfo);
        this.props.history.push("/home");
      })
      .catch(data => {
        this.setState({ isLoading: false });
        //dealing with server side errors
        this.setState({ errIn: data.response.data.message });
      });
  };

  formIsValid = (formName) => {
    switch (formName) {
      case "IN": {
        const { email, mdp } = this.state;
        if (email == "" || mdp == "") {
          this.setState({ errIn: "Veuillez remplir le champ email !" });
          return false;
        }

        //email criteria
        if (!isEmail(email)) {
          this.setState({
            errIn: "Veuillez saisir une addresse mail valide ",
          });
          return false;
        }

        return true;
      }
      case "UP": {
        //empty
        let u = this.state.newUser;

        for (let prop in u) {
          if (u[prop] == "") {
            this.setState({
              errUp:
                prop.charAt(0).toUpperCase().concat(prop.slice(1)) +
                " ne peux pas être vide ",
            });
            return false;
          }
        }

        //min and max length first/last names

        if (u["firstName"].length < 3) {
          this.setState({
            errUp: "FirstName dois avoir ou moin 3 caracteres ",
          });
          return false;
        }
        if (u["lastName"].length < 3) {
          this.setState({
            errUp: "LastName dois avoir ou moin 3 caracteres ",
          });
          return false;
        }

        if (u["firstName"].length > 10) {
          this.setState({
            errUp: "FirstName dois avoir ou max 10 caracteres ",
          });
          return false;
        }

        if (u["lastName"].length > 10) {
          this.setState({
            errUp: "LastName dois avoir ou moin 10 caracteres ",
          });
          return false;
        }

        //password criteria
        if (u.password.length < 8) {
          this.setState({
            errUp: "Veuillez saisir un mot de pass avec plus de 8 caractéres",
          });
          return false;
        }

        //email criteria
        if (!isEmail(u.email)) {
          this.setState({
            errUp: "Veuillez saisir une addresse mail valide ",
          });
          return false;
        }
        this.setState({
          errUp: "",
        });
        return true;
      }

      default: {
        if (this.state.fp == "") {
          this.setState({ errFp: "Veuillez remplir le champ email !" });
          return false;
        }

        //email criteria
        if (!isEmail(this.state.fp)) {
          this.setState({
            errFp: "Veuillez saisir une addresse mail valide ",
          });
          return false;
        }

        return true;
      }
    }
  };

  onChangeInput = (e) => {
    //clear error msgs
    this.setState({ errIn: "" });
    this.setState({ errFp: "" });
    //set state values
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  onSubmitSignin = (e) => {
    e.preventDefault();
    if (this.formIsValid("IN")) this.doSignIn();
  };
}

SigninPage.contextType = AuthContext;
