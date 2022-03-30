import React from "react";
import { handleClick } from "../../services/handleClick";
const Home = () => {
const url = "https://www.linkedin.com/in/vinicius-spanol";

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>hello world!</h3>
        <p>
          My name is Vinicius Spanol, i am a Full-Stack Developer based in Praia
          Grande/SP.
        </p>
        <p>
          I am currently looking for a Front-End/Full-Stack Developer position, with a
          strong interest in the web development, and a great interesting to learn
          new technologies.
        </p>
        <p>
          My current skills are: HTML, CSS, JavaScript, React, React Native,
          Redux, Node.js, Nest.js, Express, MongoDB, Prisma, Git, GitHub, and
          more.
        </p>
        <a onClick={() => handleClick(url)} className="btn">
          Contact-me
        </a>
      </div>
    </section>
  );
};

export default Home;
