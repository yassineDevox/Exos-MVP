import React from "react";
import LevelStudyEnum from "../models/enum-level";

export const Signup_UI = (props) => {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header ">
            <div>
              <h4 className="modal-title" id="exampleModalLabel">
                S'inscrire
              </h4>
              <span className="lead fs-6">C'est rapide et facile !</span>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* signup form */}
            <form onSubmit={props.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  type="text"
                  className={
                    props.err != ""
                      ? " form-control is-invalid"
                      : "form-control"
                  }
                  id="nom"
                  name="firstname"
                  placeholder="firstname"
                />
                <label htmlFor="nom">Nom </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  type="text"
                  className={
                    props.err != ""
                      ? " form-control is-invalid"
                      : "form-control"
                  }
                  id="pren"
                  placeholder="pren"
                  name="lastname"
                />
                <label htmlFor="pren">Prénom </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={props.handleChange}
                  type="email"
                  className={
                    props.err != ""
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
                    props.err != ""
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
                  props.err != ""
                    ? "  form-select mb-3 is-invalid"
                    : "form-select mb-3 "
                }
                name="level"
                onChange={props.handleChange}
              >
                <option selected>Niveau d'étude</option>
                <option value={LevelStudyEnum.COLLEGE}>Collége</option>
                <option value={LevelStudyEnum.TC}>Tronc Commun</option>
                <option value={LevelStudyEnum.Bac_1}>1er année Bac</option>
                <option value={LevelStudyEnum.Bac_2}>2eme année Bac</option>
                <option value={LevelStudyEnum.SUP}>Université ou Ecole</option>
              </select>
              <br />
              <div className="text-center d-grid gap-2">
                <button
                  className="btn btn-success btn-sm fw-bold"
                  type="submit"
                >
                  Inscription
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
