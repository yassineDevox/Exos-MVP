import React, { Component } from "react";
import AuthContext from "../../auth/auth-context";
import PostService from "../services/posts.service";

import LevelStudyEnum from "../../models/enum-level";
import SubjectEnum from "../../models/enum-subjects";
import c from "../../assets/images/college.png"
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
  { img: computer, name: LevelStudyEnum.COLLEGE, isActive: false },
  { img: t, name: LevelStudyEnum.TC, isActive: false },
  { img: b1, name: LevelStudyEnum.BAC_1, isActive: false },
  { img: b2, name: LevelStudyEnum.BAC_2, isActive: false },
  { img: s, name: LevelStudyEnum.SUP, isActive: false },
];


const SUBJECTS = [
  { img: m, name: SubjectEnum.MATH },
  { img: c, name: SubjectEnum.INFORMATIQUE },
  { img: p, name: SubjectEnum.PHYS },
  { img: b, name: SubjectEnum.SVT },
  { img: o, name: SubjectEnum.AUTRE },
];


//create authContext from React
const PostContext = React.createContext();

export class PostProvider extends Component {
  // data shared
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      levels:LEVELS,
      subjects:SUBJECTS
    };
  }

  setLevelToActive = (selectedLevel) =>{
    let newlevels = this.state.levels;
    newlevels.forEach((l,index)=>{
      if(index==selectedLevel)l.isActive=true;
      else l.isActive=false;
    })
    this.setState({levels:newlevels});
  }  
  setSubjectToActive = (selectedSubject) =>{
    let newSubjects = this.state.subjects;
    newSubjects.forEach((l,index)=>{
      if(index==selectedSubject)l.isActive=true;
      else l.isActive=false;
    })
    this.setState({subjects:newSubjects});
  }


  // onrefreach the pages i think yeah here i will initialize again the user's infos 
  componentDidMount() {
    PostService.getAllByLevel(this.context.currentUser?.niveau)
    .then(response=>{
        this.setState({posts:response.data.content})
    })
  }

  render() {
    
    const {posts,levels,subjects,} = this.state;
    const {setLevelToActive,setSubjectToActive}=this;
    return (
        
      <PostContext.Provider
        value={{
            posts,levels,subjects,setLevelToActive,setSubjectToActive
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

PostProvider.contextType=AuthContext;

export default PostContext;
