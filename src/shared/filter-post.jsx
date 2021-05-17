import React from "react";

export default FilterPost = (props) => {
  
  return (
    <section className={ props.byLevel ? "menu-lg" : "filter-tag" } >
      <div className="border p-2">
        <div className="setting-link m-1 p-1">
          <img src="./imgs/home.png" className="link-icon" alt="avatar" />
          <span>{props.title}</span>
        </div>
        <div className="setting-link m-1 p-1">
          <img src="./imgs/help.png" className="link-icon" alt="avatar" />
          <span> Support Exos</span>
        </div>
      </div>
    </section>
  );
};
