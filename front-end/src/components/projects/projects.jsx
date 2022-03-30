import React from "react";

const Projetcs = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <h1 className="heading">
        my <span>projects</span>
      </h1>
      <div className="box-container">
        {projects.map(({ _id, title, subtitle, content, img }) => (
          <div className="box" key={_id}>
            <div className="image">
              <img src={img} alt={title} />
            </div>
            <div className="content">
              <h3>{title}</h3>
              <span>{subtitle}</span>
              <p>{content}</p>
              <button className="btn">See more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetcs;
