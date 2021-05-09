import React, { Component } from "react";
import { ForgetPass_UI } from "../components/forget-pass";
import { Signin_UI } from "../components/signin";
import { Signup_UI } from "../components/signup";
import UserModel from "../models/model-user";
import "./../assets/css/signin.css";

export default class SigninPage extends Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      mdp: "",
      fp:"",
      newUser: new UserModel(),
      err:""
    };
  }
  render() {
    return (
      <main id="auth" class="row text-sm-center text-md-start p-5 mx-auto mt-4">
        <section class="col-1"></section>
        {/* Signin part */}
        <Signin_UI
          handleChange={this.onChangeInput}
          handleSubmit={this.onSubmitSignin}
          err={this.state.err}
        />
        {/* modals */}
        <Signup_UI
          handleChange={this.onChangeInput_UP}
          handleSubmit={this.onSubmitSignup}
        />
        <ForgetPass_UI 
          handleChange={this.onChangeInput}
          handleSubmit={this.onSubmitForgetPassword}
        />
      </main>
    );
  }

  doForgetPassword = () =>{
    alert("send verification link to this email : "+this.state.mail);
  }
  onSubmitForgetPassword = (e) => {
    e.preventDefault();
    if(this.formIsValid()) this.doForgetPassword()
    else alert("error mail");
  }

  onChangeInput_UP = (e) => {
    let u = this.state.newUser;
    u[e.target.name] = e.target.value;
    this.setState({newUser:u});
  };

  onSubmitSignup = (e) => {
    e.preventDefault();
    if (this.formIsValid("UP")) this.doSignUp();
    else alert("error signup");
  };

  doSignUp = () => {
    console.log(this.state.newUser);
  };

  //-----signin
  doSignIn = () => {
    const { mail, mdp } = this.state;
  };

  formIsValid = (formName) => {
    switch (formName) {
      case "IN":
        {
          const { mail, mdp } = this.state;
          if (mail == "" || mdp == "") return false;
          return true;
        }
      case "UP":
        {
          //empty
          let u = this.state.newUser;

          if( Object.keys(u).some( k => u[k]=="" ) ) {
            this.setState({err:"veuillez remplir toute les champs "})
            return false;
          }
          

          //password criteria
          if(! u.password.length >= 8){
            this.setState({err:"veuillez saisir un mot de pass avec plus de 8 caractéres"})
            return false;
          }

          return true;

        }

      default:
        {
          return this.state.fp != "";
        }
    }
  };

  onChangeInput = (e) => {
    //clear error msgs 
    this.setState({err:""});
    //set state values
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  onSubmitSignin = (e) => {
    e.preventDefault();
    if (this.formIsValid("IN")) this.doSignIn();
    else {
      this.setState({err:"Veuillez remplir toute les champs "})
    }
  };
}
