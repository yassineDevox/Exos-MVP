import LevelStudyEnum from "../models/enum-level";
import React from "react";

import c from "../assets/images/college.png";
import t from "../assets/images/tc.png";
import b1 from "../assets/images/bac1.png";
import b2 from "../assets/images/bac2.png";
import s from "../assets/images/sup.png";


const LEVELS = [
    { img:c,name:LevelStudyEnum.COLLEGE},
    { img:t,name:LevelStudyEnum.TC},
    { img:b1,name:LevelStudyEnum.BAC_1},
    { img:b2,name:LevelStudyEnum.BAC_2},
    { img:s,name:LevelStudyEnum.SUP}
]

function Level(props){
    return (
        <div className={props.isActive ? "setting-link m-2 p-2 active-tag":"setting-link m-2 p-2"}>
            <img src={props.img} className="link-icon" />
            <span className="text-capitlize ms-1"> {props.name}</span>
        </div>
    )
}


export default function Levels(){
    return (
        
        LEVELS.map( (l,i) => <Level key={i} img={l.img} name={l.name} /> )
        
    )
}