import React, { useState } from "react";
import Levels from "../constant/levels-cts";
import Subjects from "../constant/subjects-cts";
import PropTypes from 'prop-types';
import filterIcon from '../assets/images/funnel.svg';

export const FilterPost = (props) => {
  const [isActive,setIsActive] = useState(false); 
  return (
    <section className={ props.bySubject ? "filter-tag":"menu-lg" } >
      <div className="border p-2">
        <button className="setting-link m-1 p-1 border active-tag">
          <img height="34" width="34" src={filterIcon} className="link-icon" alt="avatar" />
          <span className="text-uppercase fw-bold"> filtrer par <span className="filter-target">{props.title}</span></span>
        </button>
         { props.bySubject ? <Subjects isActive={isActive} /> : <Levels isActive={isActive} /> }
      </div>
    </section>
  );
};

FilterPost.propTypes = {
  bySubject:PropTypes.bool,
  title:PropTypes.string.isRequired
}

export default FilterPost;