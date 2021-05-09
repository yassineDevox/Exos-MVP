import React from "react";
import welcome from "../assets/images/welcome.svg";

export const Signin_UI = () => {
  return (
    <>
      <section className="col-md-5 pt-md-5">
        <h1 className="text-primary fw-bold">Exos</h1>
        <p className="lead ">
          Avec <strong>Exos</strong>, partagez vos exercices et travailler
          ensemble pour réussir vos études !!
        </p>
        <img className="welcome" src={welcome} alt="welcome" />
      </section>
      <section className="border col-md-5 bg-white p-3 ">
        {/* signin form */}
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="mail"
            />
            <label htmlFor="floatingInput">Address mail</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Mot de passe</label>
          </div>
          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" type="button">
              Connexion
            </button>
          </div>
        </form>{" "}
        {/* /signin form */}
        <br />
        <div className="text-center">
          <a
            href="#"
            className="link-primary text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#forgetPasswordModal"
          >
            Mot de passe oublié ?
          </a>
          <hr />
          <button
            className="btn btn-success btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            Creér un compte
          </button>
        </div>
        <p className="text-center mt-4 lead fs-6">
          {" "}
          <strong>Préparer</strong> vos examens <strong>en ligne</strong> avec
          vos <strong>amis !</strong>{" "}
        </p>
      </section>
    </>
  );
};
