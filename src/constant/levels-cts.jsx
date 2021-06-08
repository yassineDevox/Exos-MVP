import React, { useContext, useState } from "react";
import PostContext from "../shared/context/post.context";


function Level(props) {
  const {setLevelToActive} = useContext(PostContext)
  return (
    <div
      onClick={() => setLevelToActive(props.id)}
      className={
        props.isActive
          ? "setting-link m-2 p-2 active-tag"
          : "setting-link m-2 p-2"
      }
    >
      <img src={props.img} className="link-icon" />
      <span className="text-capitlize ms-1"> {props.name}</span>
    </div>
  );
}

export default function Levels() {

  const {levels} = useContext(PostContext)
  return levels.map((l, i) => (
    <Level
      key={i}
      id={i}
      img={l.img}
      name={l.name}
      isActive={l.isActive}
    />
  ));
}
