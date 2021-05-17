import React from "react";

export const FormPost = () => {
  return (
    <div
      className="modal fade"
      id="newPostModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header ">
            <div>
              <h4 className="modal-title" id="exampleModalLabel">
                Créer Un Poste
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
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description{" "}
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Matiére</option>
                <option value={1}>Math</option>
                <option value={2}>Physique</option>
                <option value={3}>Svt</option>
                <option value={4}>Autre</option>
              </select>
              <div className="text-center">
                <button className="btn btn-success btn-md">
                  {" "}
                  <i className="far fa-image" /> Ajouter une photo
                </button>
                <input type="file" className="form-control d-none" />
              </div>
              <br />
              <div className="text-center d-grid gap-2">
                <button className="btn btn-primary btn-sm" type="button">
                  Poster
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
