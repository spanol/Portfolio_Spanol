import React, { useState, useEffect } from "react";

import getFromApi from "../../services/api";
import { handleClick } from "../../services/handleClick";
import Footer from "./footer";
const FooterContainer = () => {
  const [contactForm, setContactForm] = useState([]);

  useEffect(() => {
    getFromApi("contacts", setContactForm);
  }, []);

  return (
    <Footer contactForm={contactForm} />
  );
};

export default FooterContainer;
