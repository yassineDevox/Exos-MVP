import LevelStudyEnum from "../models/enum-level";
import React from "react";

const LEVELS = [
    { img:"",name:LevelStudyEnum.COLLEGE},
    { img:"",name:LevelStudyEnum.TC},
    { img:"",name:LevelStudyEnum.Bac_1},
    { img:"",name:LevelStudyEnum.Bac_2},
    { img:"",name:LevelStudyEnum.SUP}
]

function Level(props){
    return (
        <div className="setting-link m-1 p-1">
            <img src={props.img} className="link-icon" alt={props.name} />
            <span className="text-capitlize"> {props.name}</span>
        </div>
    )
}


export default function Levels(){
    return (
        
        LEVELS.map( (l,i) => <Level key={i} img={l.img} name={l.name} /> )
        
    )
}