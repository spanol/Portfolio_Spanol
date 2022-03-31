import React from "react";

import { useSearch } from "../../context/context";
import { handleClick } from "../../services/handleClick";
const Projetcs = ({ projects }) => {
  const { search } = useSearch();
  return (
    <section className="projects" id="projects">
      <h1 className="heading">
        my <span>projects</span>
      </h1>
      <div className="box-container">
        {projects
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map(({ _id, title, subtitle, content, img, link }) => (
            <div className="box" key={_id}>
              <div className="image">
                <img
                  src={img}
                  alt={title}
                  onClick={() => {
                    console.log(img);
                  }}
                />
              </div>
              <div className="content">
                <h3>{title}</h3>
                <span>{subtitle}</span>
                <p>{content}</p>
                <button
                  className="btn"
                  onClick={() => {
                    handleClick(link);
                    console.log(link);
                  }}
                >
                  See more
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projetcs;
