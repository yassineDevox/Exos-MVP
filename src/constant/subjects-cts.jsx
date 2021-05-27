import SubjectEnum from "../models/enum-subjects";
import React from "react";
import m from "../assets/images/math.svg";
import c from "../assets/images/computer.svg";
import p from "../assets/images/physic.png";
import b from "../assets/images/biology.png";
import o from "../assets/images/other.svg";

const SUBJECTS = [
  { img: m, name: SubjectEnum.MATH },
  { img: c, name: SubjectEnum.INFORMATIQUE },
  { img: p, name: SubjectEnum.PHYS },
  { img: b, name: SubjectEnum.SVT },
  { img: o, name: SubjectEnum.AUTRE },
];

function Subject(props) {
  return (
    <div className="setting-link m-2 p-2">
      <img src={props.img} className="link-icon"/>
      <span className=" ms-1 text-capitalize"> {props.name}</span>
    </div>
  );
}

export default function Subjects() {
  return SUBJECTS.map((s, i) => <Subject key={i} img={s.img} name={s.name} />);
}
