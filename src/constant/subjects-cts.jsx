import SubjectEnum from "../models/enum-subjects";

const SUBJECTS = [
    { img:"",name:SubjectEnum.MATH},
    { img:"",name:SubjectEnum.INFORMATIQUE},
    { img:"",name:SubjectEnum.PHYS},
    { img:"",name:SubjectEnum.SVT},
    { img:"",name:SubjectEnum.AUTRE}
]

function Subject(props){
    return (
        <div className="setting-link m-1 p-1">
            <img src={props.img} className="link-icon" alt={props.name} />
            <span className="text-capitlize"> {props.name}</span>
        </div>
    )
}


export default function Subjects(){
    return (
        {
            SUBJECTS.map( (s,i) => <Subject key={i} img={s.img} name={s.name} /> )
        }
    )
}