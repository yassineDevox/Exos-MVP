import React, { Component } from "react";
import { ForgetPass_UI } from "../components/forget-pass";
import { Signin_UI } from "../components/signin";
import { Signup_UI } from "../components/signup";
import './../assets/css/signin.css';

export default class SigninPage extends Component {
  render() {
    return (
      <main id="auth" class="row text-sm-center text-md-start p-5 mx-auto mt-4">
        <section class="col-1"></section>
        {/* Signin part */}
        <Signin_UI/>
        {/* modals */}
        <Signup_UI/>
        <ForgetPass_UI/>
      </main>
    );
  }
}
