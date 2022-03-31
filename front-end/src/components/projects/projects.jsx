import React from "react";

import { handleClick } from "../../services/handleClick";
const Projetcs = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <h1 className="heading">
        my <span>projects</span>
      </h1>
      <div className="box-container">
        {projects.map(({ _id, title, subtitle, content, img, link }) => (
          <div className="box" key={_id}>
            <div className="image">
              <img src={img} alt={title} onClick={()=>{console.log(img)}} />
            </div>
            <div className="content">
              <h3>{title}</h3>
              <span>{subtitle}</span>
              <p>{content}</p>
              <button className="btn" onClick={()=>{handleClick(link); console.log(link)}}>See more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetcs;
