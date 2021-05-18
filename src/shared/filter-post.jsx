import React from "react";
import Levels from "../constant/levels-cts";
import Subjects from "../constant/subjects-cts";

export default FilterPost = (props) => {
  
  return (
    <section className={ props.byTag ? "filter-tag":"menu-lg" } >
      <div className="border p-2">
        <div className="setting-link m-1 p-1">
          <img src="./imgs/home.png" className="link-icon" alt="avatar" />
          <span>{props.title}</span>
        </div>
         { props.bySubject ? <Subjects />:<Levels/> }
      </div>
    </section>
  );
};
