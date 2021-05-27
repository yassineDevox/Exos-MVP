import LevelStudyEnum from "../models/enum-level";
import React from "react";
const IMAGE_PATH = "/assets";


const LEVELS = [
    { img:`${IMAGE_PATH}/college.png`,name:LevelStudyEnum.COLLEGE},
    { img:`${IMAGE_PATH}/tc.png`,name:LevelStudyEnum.TC},
    { img:`${IMAGE_PATH}/bac1.png`,name:LevelStudyEnum.BAC_1},
    { img:`${IMAGE_PATH}/bac2.png`,name:LevelStudyEnum.BAC_2},
    { img:`${IMAGE_PATH}/sup.png`,name:LevelStudyEnum.SUP}
]

function Level(props){
    return (
        <div className="setting-link m-2 p-2">
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