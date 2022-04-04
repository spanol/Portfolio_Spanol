import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        <span>about</span> me{" "}
      </h1>

      <div className="row">
        <div className="content">
          <h3>more about me?</h3>
          <p>
            My name is Vinicius Spanol and i love tech and i love to study, i
            love to go to gym, i love to eat, i love to sleep and i love to
            code.
          </p>
          <p>
            My favorite language is JavaScript and i love the React framework
            for the front-end, and i love the Node.js framework for the
            back-end.
          </p>
          <p>
            I've already studied in the Blue Edtech (and im still) and i've
            studied in the São Judas Tadeu university. In those, i've studied:
            OOP concepts, Progamming logic, Data Structures, Algorithms, and
            more. I really love to learn new things and would be happy to learn
            a new language or neu technology.
          </p>
          <a href="#" className="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
