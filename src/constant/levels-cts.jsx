import LevelStudyEnum from "../models/enum-level";
import React from "react";
import college from "../assets/images/college.png";
import tc from "../assets/images/tc.png";
import bac1 from "../assets/images/bac1.png";
import bac2 from "../assets/images/bac2.png";
import sup from "../assets/images/sup.png";

const LEVELS = [
    { img:{college},name:LevelStudyEnum.COLLEGE},
    { img:{tc},name:LevelStudyEnum.TC},
    { img:{bac1},name:LevelStudyEnum.BAC_1},
    { img:{bac2},name:LevelStudyEnum.BAC_2},
    { img:{sup},name:LevelStudyEnum.SUP}
]

function Level(props){
    return (
        <div className="setting-link m-1 p-1">
            <img src={props.img} className="link-icon" />
            <span className="text-capitlize"> {props.name}</span>
        </div>
    )
}


export default function Levels(){
    return (
        
        LEVELS.map( (l,i) => <Level key={i} img={l.img} name={l.name} /> )
        
    )
}