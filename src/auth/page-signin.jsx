import React, { Component } from "react";
import { ForgetPass_UI } from "../components/forget-pass";
import { Signin_UI } from "../components/signin";
import { Signup_UI } from "../components/signup";
import UserModel from "../models/model-user";
import "./../assets/css/signin.css";
import AuthContext from "./auth-context";
import { isEmail } from "validator";

export default class SigninPage extends Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      mdp: "",
      fp: "",
      newUser: new UserModel(),
      errIn: "",
      errUp: "",
      errFp: "",
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
          />
          {/* modals */}
          <Signup_UI
            handleChange={this.onChangeInput_UP}
            handleSubmit={this.onSubmitSignup}
            err={this.state.errUp}
          />
          <ForgetPass_UI
            handleChange={this.onChangeInput}
            handleSubmit={this.onSubmitForgetPassword}
            err={this.state.errFp}
          />
        </main>
        <p className="lead text-center fs-6 p-1">
          Bienvenu Chez Exos toute drois d'auteur est réservé @Copyright 2021
        </p>
      </div>
    );
  }

  doForgetPassword = () => {
    alert("send verification link to this email : " + this.state.mail);
  };

  onSubmitForgetPassword = (e) => {
    e.preventDefault();
    if (this.formIsValid()) this.doForgetPassword();
    else {
      this.setState({ errFp: "Veuillez remplir le champ email !" });
    }
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
    this.context
      .register(this.state.newUser)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  //-----signin
  doSignIn = () => {
    const { mail, mdp } = this.state;
    this.context
      .login(mail, mdp)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  formIsValid = (formName) => {
    switch (formName) {
      case "IN": {
        const { mail, mdp } = this.state;
        if (mail == "" || mdp == "") return false;
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
            errUp:"FirstName dois avoir ou moin 3 caracteres ",
          });
          return false;
        } 
        if (u["lastName"].length < 3) {
          this.setState({
            errUp:"LastName dois avoir ou moin 3 caracteres ",
          });
          return false;
        }
        
        if (u["firstName"].length > 10) {
          this.setState({
            errUp:"FirstName dois avoir ou max 10 caracteres ",
          });
          return false;
        }

        if (u["lastName"].length > 10) {
          this.setState({
            errUp:"LastName dois avoir ou moin 10 caracteres ",
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
        if (!isEmail(u.mail)) {
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
        return this.state.fp != "";
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
    else {
      this.setState({ errIn: "Veuillez remplir toute les champs " });
    }
  };
}

SigninPage.contextType = AuthContext;
