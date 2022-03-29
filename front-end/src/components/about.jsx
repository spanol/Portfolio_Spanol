import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        <span>about</span> me{" "}
      </h1>

      <div className="row">
        <div className="image">
          <img src="images/about-img.jpeg" alt="" />
        </div>

        <div className="content">
          <h3>what makes me special?</h3>
          <p>
            I love tech and i love to study, i love to train, i love to eat, i love to sleep and
            i love to code.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet
            enim quod veritatis, nihil voluptas culpa! Neque consectetur
            obcaecati sapiente?
          </p>
          <a href="#"  className="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
