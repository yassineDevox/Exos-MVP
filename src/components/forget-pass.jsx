import React from "react";

export const ForgetPass_UI = (props) => {
  return (
    <div
      className="modal fade"
      id="forgetPasswordModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header ">
            <div>
              <h4 className="modal-title" id="exampleModalLabel">
                Mot de passe Oublier{" "}
              </h4>
              <span className="lead fs-6">Vérifier votre addresse email !</span>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* forget password form */}
            <form onSubmit={props.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={
                    props.err != "" ? "form-control is-invalid" : "form-control"
                  }
                  id="mail"
                  placeholder="mail"
                  name="mail"
                  onChange={props.handleChange}
                />
                <label htmlFor="mail">Votre addresse mail</label>
              </div>
              <div className="text-center d-grid gap-2">
                <button
                  className="btn btn-primary btn-sm fw-bold"
                  type="submit"
                >
                  Envoyer
                </button>
                <span
                  className={
                    props.err == "" ? "d-none" : "text-center text-danger"
                  }
                >
                  {props.err}
                </span>
              </div>
            </form>
            {/* /forget password form */}
          </div>
        </div>
      </div>
    </div>
  );
};
