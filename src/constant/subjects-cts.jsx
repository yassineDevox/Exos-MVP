import SubjectEnum from "../models/enum-subjects";
import React from "react";
import math from "../assets/images/math.svg";
import computer from "../assets/images/computer.svg";
import physic from "../assets/images/physic.png";
import svt from "../assets/images/biology.png";
import other from  "../assets/images/other.svg";

const SUBJECTS = [
  { img: {math}, name: SubjectEnum.MATH },
  { img: {computer}, name: SubjectEnum.INFORMATIQUE },
  { img: {physic}, name: SubjectEnum.PHYS },
  { img: {svt}, name: SubjectEnum.SVT },
  { img: {other}, name: SubjectEnum.AUTRE },
];

function Subject(props) {
  return (
    <div className="setting-link m-1 p-1">
      <img src={props.img} className="link-icon"/>
      <span className="text-capitlize"> {props.name}</span>
    </div>
  );
}

export default function Subjects() {
  return SUBJECTS.map((s, i) => <Subject key={i} img={s.img} name={s.name} />);
}
