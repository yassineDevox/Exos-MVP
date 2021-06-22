import React, { useRef } from "react";
import SubjectEnum from "../../models/enum-subjects";

export const FormPost = (props) => {
  const inputRef = useRef(null);
  return (
    <div
      className="modal fade"
      id="newPostModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"      
      data-bs-backdrop="static" 
      data-bs-keyboard="false"
      aria-hidden="true"
      onClick={props.onExitedModal}
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
            {/* add post form */}
            <form onSubmit={props.handleSubmit} className="add-post">
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
                  onChange={props.handleChange}
                  name="description"
                />
              </div>

              <div className="d-flex justify-content-between">
                <select
                  className="form-select w-50"
                  onChange={props.handleChange}
                  name="matiere"
                >
                  <option defaultValue>Matiére</option>
                  <option value={SubjectEnum.MATH}> Mathématique </option>
                  <option value={SubjectEnum.PHYS}> Physique-chimie </option>
                  <option value={SubjectEnum.SVT}> Svt </option>
                  <option value={SubjectEnum.AUTRE}> Autre </option>
                </select>
                <button 
                  className="btn btn-success btn-md" 
                  type="button"
                  onClick={()=> inputRef.current.click()} 
                >
                  {" "}
                  <i className="far fa-image" /> Exercice Format Image
                </button>
                <input
                  ref={inputRef}
                  type="file"
                  className="form-control d-none"
                  onChange={props.handleChange}
                  name="content"
                />
              </div>
              <br />
              <div className="text-center d-grid gap-2">
                <button className="btn btn-primary btn-sm" type="submit" >
                  Poster
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

export default FormPost;
