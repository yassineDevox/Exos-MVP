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
      posts: [],
      postsBackup: [],
      levels: LEVELS,
      subjects: SUBJECTS,
    };
  }

  setLevelToActive = (selectedLevel) => {
    let newlevels = this.state.levels;

    newlevels.forEach((l, index) => {
      if (index == selectedLevel.id) l.isActive = !l.isActive;
      else l.isActive = false;
    });
    this.setState({ levels: newlevels });

    let doFilter = false;
    for (let i = 0; i < this.state.levels.length; i++)
      if (this.state.levels[i].isActive) doFilter = true;

    if (doFilter)
      this.setState({
        posts: this.state.postsBackup.filter(
          (p) => p.niveau == selectedLevel.name
        ),
      });
    else this.setState({ posts: this.state.postsBackup });
  };

  setSubjectToActive = (selectedSubject) => {
    let newSubjects = this.state.subjects;
    newSubjects.forEach((l, index) => {
      if (index == selectedSubject.id) l.isActive = !l.isActive;
      else l.isActive = false;
    });
    this.setState({ subjects: newSubjects });

    let doFilter = false;

    for (let i = 0; i < newSubjects.length; i++)
      if (newSubjects[i].isActive) doFilter = true;

    console.log(doFilter);
    if (doFilter) {
      let filtredList = this.state.postsBackup.filter(
        (p) => p.matiere == selectedSubject.name
      );
      this.setState({
        posts: filtredList,
      });
    } else this.setState({ posts: this.state.postsBackup });
  };

  // onrefreach the pages i think yeah here i will initialize again the user's infos
  componentDidMount() {
    PostService.getAllByLevel(this.context.currentUser?.niveau).then(
      (response) => {
        this.setState({
          posts: response.data.content,
          postsBackup: response.data.content,
        });
      }
    );

    let newLevels = this.state.levels;

    if (this.context.currentUser && this.context.currentUser.niveau?.toLowerCase().startWith("c"))
      newLevels[0].isActive = true;
    
      else if (this.context.currentUser && this.context.currentUser.niveau?.toLowerCase().startWith("t"))
      newLevels[1].isActive = true;
    
      else if (this.context.currentUser && this.context.currentUser.niveau?.toLowerCase().startWith("s"))
      newLevels[4].isActive = true;
    
      if (
        this.context.currentUser && this.context.currentUser.niveau?.toLowerCase().startWith("b") &&
        this.context.currentUser && this.context.currentUser.niveau?.contain("1")
      )
      newLevels[2].isActive = true;

      else newLevels[3].isActive = true;

      this.setState({levels:newLevels});
  }

  render() {
    const { posts, levels, subjects } = this.state;
    const { setLevelToActive, setSubjectToActive } = this;
    return (
      <PostContext.Provider
        value={{
          posts,
          levels,
          subjects,
          setLevelToActive,
          setSubjectToActive,
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}
PostProvider.contextType = AuthContext;

export default PostContext;
