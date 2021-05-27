import SubjectEnum from "../models/enum-subjects";
import React from "react";

const IMAGE_PATH = "/assets";

const SUBJECTS = [
  { img: `${IMAGE_PATH}/math.svg`, name: SubjectEnum.MATH },
  { img: `${IMAGE_PATH}/computer.svg`, name: SubjectEnum.INFORMATIQUE },
  { img: `${IMAGE_PATH}/physic.png`, name: SubjectEnum.PHYS },
  { img: `${IMAGE_PATH}/biology.png`, name: SubjectEnum.SVT },
  { img: `${IMAGE_PATH}/other.svg`, name: SubjectEnum.AUTRE },
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
