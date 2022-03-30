import React from "react";

const Abilities = ({ abilities }) => {
  return (
    <section className="abilities" id="abilities">
      <h1 className="heading">
        {" "}
        <span>my</span> abilities{" "}
      </h1>
      {abilities.map(({ _id, language, percent }) => (
        <div className="content" key={_id}>
          <h3 style={{ width: percent }}>{language}</h3>
        </div>
      ))}
    </section>
  );
};

export default Abilities;
