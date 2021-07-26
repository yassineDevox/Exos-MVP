import React, { Component } from "react";
import Feed from "../components/post/feed";
import FormPost from "../components/post/form";
import { NewPost } from "../models/model-post";
import PostContext from "../shared/context/post.context";
import FilterPost from "../shared/filter-post";
import Header_LT from "../shared/header";
import "./../assets/css/home.css";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      newPost: new NewPost(),
      isLoading: false,
      isLoadingImg: false,
      err: "",
    };
  }
  render() {
    return (
      <>
        {/* HEADER */}
        <Header_LT />
        {/* MAIN CONTENT    */}
        <main className="border">
          {/* Filter By Level In Default */}
          <FilterPost title="Niveau d'étude " />
          {/* Feed */}
          <Feed />
          {/* Filter By Subject */}
          <FilterPost title="Matiére " bySubject />
        </main>
        {/* Modals */}
        <FormPost
          handleChange={this.handleChangeInput}
          handleSubmit={this.addPost}
          err={this.state.err}
          isLoading={this.state.isLoading}
          isLoadingImg={this.state.isLoadingImg}
          onExitedModal={this.clearStates}
          handleChangeImage={this.uploadImage}
        />
      </>
    );
  }

  uploadImage = (event) => {

    this.setState({ isLoadingImg: true })
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg") {
      let picture = event.target.files[0];
      let pictureLabel = event.target.files[0].name;

      if (picture.size > 5 * 1024 * 1024) {
        this.setState({ err: "La taille du fichier est trop volumineuse" });
        return;
      }
      //upload image 

      const reader = new FileReader();
      reader.readAsDataURL(picture);

      reader.onload = () => {

        pictureLabel = picture.name;
        console.log(picture)
        this.setState(
          {
            isLoadingImg: false, err: "",
            newPost: { ...this.state.newPost, content: reader.result }
          })


      };

    }
    else {
      this.setState({ err: "On accepte Que les formats : png , jpeg , jpg", isLoadingImg: false });
    }


  }

  clearStates = () => {
    this.setState({ err: "", newPost: new NewPost() });
    document.querySelector("form.add-post").reset();
  };

  isFormValid = () => {

    if (this.state.newPost.matiere == ""
      || this.state.newPost.description == ""
      || this.state.newPost.content == "") {
      this.setState({ err: "Veuliez Remplir toute les champs !" });
      return false;
    }
    this.setState({ err: "" })
    return true;
  };

  addPost = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      //send image to IBM server and get the urlToken
      this.context.addPost(this.state.newPost)
    }
  };

  handleChangeInput = (e) => {

    this.setState(
      (prevState) => (prevState.newPost[e.target.name] = e.target.value)
    );
  };
}

HomePage.contextType = PostContext;
