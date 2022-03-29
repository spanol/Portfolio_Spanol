import React, { useState, useEffect } from "react";

import getFromApi from "../services/api";
import { handleClick } from "../services/handleClick";
const Footer = () => {
  const [contactForm, setContactForm] = useState([]);

  useEffect(() => {
    getFromApi("contacts", setContactForm);
  }, []);



  return (
    <section className="footer">
      <div className="share">
        {contactForm.map(({ _id, link, icon }) => (
          <a key={_id} onClick={() => handleClick(link)} className={icon}></a>
        ))}
      </div>

      <div className="links">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">products</a>
        <a href="#">contact</a>
      </div>

      <div className="credit">
        developed by <span>Vinicius Spanol</span> with ❤️{" "}
      </div>
    </section>
  );
};

export default Footer;
