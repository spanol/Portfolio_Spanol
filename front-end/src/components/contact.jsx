import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        contact <span>me</span> {" "}
      </h1>

      <div className="row">
        <form action="">
          <h3>get in touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="text" placeholder="number" />
          </div>
          <input type="submit" value="contact now" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;