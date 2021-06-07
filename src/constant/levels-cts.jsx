import LevelStudyEnum from "../models/enum-level";
import React, { useState } from "react";

import c from "../assets/images/college.png";
import t from "../assets/images/tc.png";
import b1 from "../assets/images/bac1.png";
import b2 from "../assets/images/bac2.png";
import s from "../assets/images/sup.png";

const LEVELS = [
  { img: c, name: LevelStudyEnum.COLLEGE, isActive: false },
  { img: t, name: LevelStudyEnum.TC, isActive: false },
  { img: b1, name: LevelStudyEnum.BAC_1, isActive: false },
  { img: b2, name: LevelStudyEnum.BAC_2, isActive: false },
  { img: s, name: LevelStudyEnum.SUP, isActive: false },
];

function Level(props) {
  return (
    <div
      onClick={() => props.onActive(props.id)}
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
  const [levels, setLevels] = useState(LEVELS);

  const setLevel = (selectedLevel) => {
    LEVELS.forEach((l, index) => {
      if (index == selectedLevel) l.isActive = true;
      else l.isActive = false;
    });
    console.log(LEVELS);
    setLevels(LEVELS);
  };
  return levels.map((l, i) => (
    <Level
      onActive={setLevel}
      isActive={l.isActive}
      key={i}
      id={i}
      img={l.img}
      name={l.name}
    />
  ));
}
