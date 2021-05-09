import React, { Component } from "react";
import { ForgetPass_UI } from "../components/forget-pass";
import { Signin_UI } from "../components/signin";
import { Signup_UI } from "../components/signup";
import './../assets/css/signin.css';

export default class SigninPage extends Component {

  constructor(){
      super();
      this.state ={
        mail:"",
        mdp:"",
      } 
  }  
  render() {
    return (
      <main id="auth" class="row text-sm-center text-md-start p-5 mx-auto mt-4">
        <section class="col-1"></section>
        {/* Signin part */}
        <Signin_UI 
            handleChange={this.onChangeInput} 
            handleSubmit={this.onSubmitSignin}
        />
        {/* modals */}
        <Signup_UI/>
        <ForgetPass_UI/>
      </main>
    );
  }

    doSignIn = () => {
        const {mail,mdp} = this.state;
        
    }

    formIsValid = (formName)=>{

        switch (formName) {
            case "IN":
                {
                    const {mail,mdp} = this.state;
                    if(mail=="" || mdp=="") return false
                    return true;

                }break;
            case "UP":
                {

                }break;  

            default:
                break;
        }
    }

    onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value});
    }

    onSubmitSignin = (e)=>{
        e.preventDefault();
        if(this.formIsValid("IN")) this.doSignIn();
        else alert("error");
    }



}
