import React, { Component } from "react";
import notFound from "../assets/images/404.svg";
import "../assets/css/err-404.css";

export default class Error404 extends Component {
  render() {
    return (
      <div id="err-404" className="d-flex flex-column align-items-center justify-content-center">
        <img className="mx-auto mt-5" src={notFound} alt="" />
        <button className="btn btn-primary m-5">Back Home</button>
        <p className="lead">Page Introvable Cliquer Sur Back Home pour retourner a la page d'acceuil</p>
      </div>
    );
  }
}
