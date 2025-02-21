import React from "react";
import "./Contact.css"; // Import the updated styles

const Contact = () => {
  return (
    <>
      <div className="con1 m-2">
        <div className="card contact-card text-center w-100 h-100">
          <div className="card-header">Contact Me</div>
          <div className="card-body">
            <p className="card-text">
              If you’d like to connect, collaborate, or discuss exciting opportunities, feel free to reach out! Whether it’s about web development, MERN stack projects, or tech-related queries, I’m always open to meaningful discussions. You can contact me via email, LinkedIn, or through my hosted projects. Let’s build something innovative together!
            </p>
            <hr />
            <b>Email</b>: chandanvishw11002@gmail.com
            <br />
            <b>Number</b>: 6901088383
          </div>
          <div className="card-footer text-body-secondary">
            Discipline + consistency = improvement
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
