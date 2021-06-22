import React, { Component } from "react";
import Feed from "../components/post/feed";
import FormPost from "../components/post/form";
import { NewPost } from "../models/model-post";
import FilterPost from "../shared/filter-post";
import Header_LT from "../shared/header";
import "./../assets/css/home.css";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      newPost: new NewPost(),
      isLoading:false,
      err:"",
    }
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
            handleChange = {this.handleChangeInput}
            handleSubmit = {this.addPost}
            err={this.state.err}
            isLoading={this.state.isLoading}
            onExitedModal={this.clearStates}
        />
      </>
    );
  }

  clearStates = () => {
    this.setState({ err: "",newPost: new NewPost() });
    document.querySelector("form.add-post").reset();
  }

  isFormValid = () => {
    console.log(this.state.newPost.isEmpty());
    
    if(this.state.newPost.isEmpty())
    {
        this.setState({err:"Veuliez Remplir toute les champs !"});
        return false;
    }
    return true;

  }


  addPost = (e) =>{
    e.preventDefault();
    if(this.isFormValid()) alert("send post data to the server . . .");
  }

  handleChangeInput = (e) => {
    
    let p = this.state.newPost;

    p[e.target.name] = e.target.value;

    this.setState({newPost:p});
  }
}
