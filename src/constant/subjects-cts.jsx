import React, { useContext } from "react";
import PostContext from "../shared/context/post.context";

function Subject(props) {

  const {setSubjectToActive} = useContext(PostContext)
  return (
    <div
      onClick={()=>setSubjectToActive(props)}
      className={
        props.isActive ? "setting-link m-2 p-2 active-tag" : "setting-link m-2 p-2"
      }
    >
      <img src={props.img} className="link-icon" />
      <span className=" ms-1 text-capitalize"> {props.name}</span>
    </div>
  );
}

export default function Subjects() {

  const {subjects} = useContext(PostContext)
  
  return subjects.map((s, i) => (
    <Subject
      isActive={s.isActive}
      key={i}
      id={i}
      img={s.img}
      name={s.name}
    />
  ));
}
