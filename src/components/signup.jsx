import React from "react";

export const Signup_UI = () => {
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
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  placeholder="nom"
                />
                <label htmlFor="nom">Nom </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="pren"
                  placeholder="pren"
                />
                <label htmlFor="pren">Prénom </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="mail"
                  placeholder="mail"
                />
                <label htmlFor="mail">Address mail</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Mot de passe</label>
              </div>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Niveau d'étude</option>
                <option value={1}>Tronc Commun</option>
                <option value={2}>1er année Bac</option>
                <option value={3}>2eme année Bac</option>
                <option value={3}>Université ou Ecole</option>
              </select>
              <br />
              <div className="text-center">
                <button className="btn btn-success btn-lg" type="button">
                  Inscription
                </button>
              </div>
            </form>
            {/* /signup form */}
          </div>
        </div>
      </div>
    </div>
  );
};
