import React from "react";
import { handleClick } from "../../services/handleClick";
const Footer = ({contactForm}) => {
    return(
<section className="footer">
      <div className="share">
        {contactForm.map(({ _id, link, icon }) => (
          <a key={_id} onClick={() => handleClick(link)} className={icon}></a>
        ))}
      </div>

      <div className="links">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#abilities">Abilities</a>
        <a href="#contact">contact</a>
      </div>

      <div className="credit">
        developed by <span><a href="https://www.linkedin.com/in/vinicius-spanol">Vinicius Spanol</a></span> with ❤️{" "}
      </div>
    </section>
    )
}

export default Footer;