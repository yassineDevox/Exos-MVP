import React, { Component } from "react";
import AuthContext from "../../auth/auth-context";
import PostService from "../services/posts.service";

import LevelStudyEnum from "../../models/enum-level";
import SubjectEnum from "../../models/enum-subjects";
import c from "../../assets/images/college.png";
import t from "../../assets/images/tc.png";
import b1 from "../../assets/images/bac1.png";
import b2 from "../../assets/images/bac2.png";
import s from "../../assets/images/sup.png";

import m from "../../assets/images/math.svg";
import computer from "../../assets/images/computer.svg";
import p from "../../assets/images/physic.png";
import b from "../../assets/images/biology.png";
import o from "../../assets/images/other.svg";

const LEVELS = [
  { img: c, name: LevelStudyEnum.COLLEGE, isActive: false },
  { img: t, name: LevelStudyEnum.TC, isActive: false },
  { img: b1, name: LevelStudyEnum.BAC_1, isActive: false },
  { img: b2, name: LevelStudyEnum.BAC_2, isActive: false },
  { img: s, name: LevelStudyEnum.SUP, isActive: false },
];

const SUBJECTS = [
  { img: m, name: SubjectEnum.MATH, isActive: false },
  { img: computer, name: SubjectEnum.INFORMATIQUE, isActive: false },
  { img: p, name: SubjectEnum.PHYS, isActive: false },
  { img: b, name: SubjectEnum.SVT, isActive: false },
  { img: o, name: SubjectEnum.AUTRE, isActive: false },
];

//create authContext from React
const PostContext = React.createContext();

export class PostProvider extends Component {
  // data shared
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
      postsBackup: [],
      levels: LEVELS,
      subjects: SUBJECTS,
    };
  }
  //-------- <util functions 
  doFilter = (list) => {
    let f = false;
    for (let i = 0; i < list.length; i++)
      if (list[i].isActive) f = true;
    return f;
  }

  setListState = (listStateName, id) => {

    let newSubjects = this.state[listStateName];

    newSubjects.forEach((l, index) => {
      if (index == id) l.isActive = !l.isActive;
      else l.isActive = false;
    });

    this.setState({ [listStateName]: newSubjects });

  }

  setCurrentUsersLevel = () => {

    let newLevels = this.state.levels;
    let usersLevel = this.context.currentUser?.niveau;

    if (usersLevel?.toLowerCase().startsWith("c"))
      newLevels[0].isActive = true;

    else if (usersLevel?.toLowerCase().startsWith("t"))
      newLevels[1].isActive = true;

    else if (usersLevel?.toLowerCase().startsWith("s"))
      newLevels[4].isActive = true;

    if (
      usersLevel?.toLowerCase().startsWith("b") &&
      usersLevel?.includes("1")
    )
      newLevels[2].isActive = true;

    else newLevels[3].isActive = true;

    this.setState({ levels: newLevels });
  }

  getLevelsValue = (name) => {

    let NAME_LEVELS = ["COLLEGE", "TC", "1BAC", "2BAC", "SUP"];
    if (name.toLowerCase().startsWith("c")) return NAME_LEVELS[0];
    else if (name.toLowerCase().startsWith("t")) return NAME_LEVELS[1];
    else if (name.includes("1")) return NAME_LEVELS[2];
    else if (name.includes("2")) return NAME_LEVELS[3];
    else return NAME_LEVELS[4];

  }
  //-------- util functions />  

  //filter posts by the selected level 
  setLevelToActive = (selectedLevel) => {

    //set the selected level within the levels list 
    this.setListState("levels", selectedLevel.id);

    // get the new posts list from the server 
    if (this.doFilter(this.state.levels)) {
      PostService.getAllByLevel(this.getLevelsValue(selectedLevel.name))
        .then((data) => console.log(data))
        .catch(error => console.log(error))
    }


    else this.setState({ posts: this.state.postsBackup });
  };

  //filter posts by the selected subject 
  setSubjectToActive = (selectedSubject) => {

    //set the selected level within the subjects list 
    this.setListState("subjects", selectedSubject.id);


    if (this.doFilter(this.state.subjects)) {

      let filtredList = this.state.postsBackup.filter(
        (p) => p.matiere == selectedSubject.name
      );

      this.setState({
        posts: filtredList,
      });

    } else this.setState({ posts: this.state.postsBackup });

  };

  //-------- Add Post
  addPost = (newPost) => {
    //send avatar to ibm server and get the urlToken
    PostService.addPublicationContentToIbmServer(newPost.content)
      .then((response) => {
        console.log(response.data);
        //get the url 
        let urlToken = reponse.data.url;

        // PostService.add({...newPost,avatar:urlToken})
      })
      .catch((err) => {
        console.log(err)
      })

  }

  // onrefreach the pages i think yeah here i will initialize again the user's infos
  componentDidMount() {
    PostService.getAllByLevel(this.context.currentUser?.niveau)
      .then(
        (response) => {
          this.setState({
            posts: response.data.content,
            postsBackup: response.data.content,
            loading: false
          });
        }
      );
    // adaptation of name filters items and value (backend)
    this.setCurrentUsersLevel();
  }

  render() {
    const { posts, levels, subjects, loading } = this.state;
    const { setLevelToActive, setSubjectToActive, filterByDescription,addPost } = this;
    return (
      <PostContext.Provider
        value={{
          posts,
          levels,
          subjects,
          setLevelToActive,
          setSubjectToActive,
          loading,
          filterByDescription,
          addPost
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }

  //filter post by description
  filterByDescription = (key) => {
    key = key.toLowerCase()
    if (key.trim() == "") this.setState({ posts: this.state.postsBackup })
    else {
      let newList = this.state.posts.filter(p => p.description.toLowerCase().includes(key))
      this.setState({ posts: newList })
    }

  }
}
PostProvider.contextType = AuthContext;

export default PostContext;
