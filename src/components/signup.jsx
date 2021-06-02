import React from "react";

export const Signup_UI = (props) => {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header ">
            <div>
              <h4 className="modal-title text-start" id="exampleModalLabel">
                S'inscrire
              </h4>
              <span className="lead fs-6">C'est rapide et facile !</span>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={props.onExitedModal}
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* signup form */}
            <form onSubmit={props.handleSubmit} id="signupForm">
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  type="text"
                  className={
                    props.err.includes("FirstName")
                      ? " form-control is-invalid"
                      : "form-control"
                  }
                  id="nom"
                  name="firstName"
                  placeholder="firstname"
                />
                <label htmlFor="nom">Nom </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  type="text"
                  className={
                    props.err.includes("LastName")
                      ? " form-control is-invalid"
                      : "form-control"
                  }
                  id="pren"
                  placeholder="pren"
                  name="lastName"
                />
                <label htmlFor="pren">Prénom </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  className={
                    props.err.includes("ail")
                      ? " form-control is-invalid"
                      : "form-control"
                  }
                  id="mail"
                  placeholder="mail"
                  name="email"
                />
                <label htmlFor="mail">Address mail</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  type="password"
                  className={
                    props.err.includes("ass")
                      ? " form-control is-invalid"
                      : "form-control"
                  }
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Mot de passe</label>
              </div>
              <select
                className={
                  props.err.includes("Niveau")
                    ? "  form-select mb-3 is-invalid"
                    : "form-select mb-3 "
                }
                name="niveau"
                onChange={props.handleChange}
              >
                <option defaultValue>Niveau d'étude</option>
                <option value="COL">Collège</option>
                <option value="TC">Tronc Commun</option>
                <option value="1BAC">1er année Bac</option>
                <option value="2BAC">2eme année Bac</option>
                <option value="SUP">Université ou Ecole</option>
              </select>
              <br />
              <div className="text-center d-grid gap-2">
                <button
                  className="text-uppercase btn btn-success btn-sm "
                  type="submit"
                >
                  Inscription{" "}
                  <div
                    style={{
                      zoom: 0.6,
                      marginTop: "14px",
                      marginLeft: "10px",
                      padding: "10px",
                    }}
                    className={props.isLoading ? "spinner-border" : "d-none"}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
                <span
                  className={
                    props.err != "" ? "text-center text-danger mb-0" : "d-none"
                  }
                >
                  {props.err}
                </span>
              </div>
            </form>
            {/* /signup form */}
          </div>
        </div>
      </div>
    </div>
  );
};
