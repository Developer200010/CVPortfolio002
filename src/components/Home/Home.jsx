import React from "react";
import { TypedComponent } from "../TypedComponent";
import "./Home.css"; // Import the custom CSS file

const Home = () => {
  return (
    <div className="m-4 d-flex flex-wrap">
      <div className="card text-center w-100 glass-card">
        <div className="card-header">
          About me <br />
          <b>Name: </b>
          <i>CHANDAN VISHWAKARMA</i>
          <br />
          <b className="typed-text">
            <TypedComponent />
          </b>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <img
              src="https://media-hosting.imagekit.io//c02a4b4cbe264818/1715416760190%20(1).jpeg?Expires=1832864942&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HGfxRNnnYghn2fgSXg~P6c1kP32Q3tpmdIX7ifjo-~d3S05Cnxfz8Jk5uzZRHoggMhseUZQ6T-wHuZ1Pxquky6-RQhMs9F1s5grEZZA61E7Sby9npB83rxkMqlxM6aCc7JKIotMODlvHlDcEijLGodMrDtbr8Tc8tnCPEE66ybecoML8kNPX~I35aPrg2ZHmDUn1Jjw~KNBStZiJpSBOAv9la1UHtTKoWS7ftKthsd3aZo~OxJl3nKuyyRU~0swHAB33MAueuAtb~ar2qFa6bTxDXrw7sHnyor8TOG5i-4spurPT31ldOVSUpdf6AjRToFwlmvetknqSDFWrfZSPgw__"
              width="150"
              height="150"
              className="img-thumbnail img"
              alt="Profile"
            />
          </h5>
          <p className="card-text">
            <span>
              Welcome to my <b>portfolio!</b> I am a passionate software
              developer dedicated to crafting efficient, scalable, and
              user-friendly applications. With expertise in the{" "}
              <b>MERN stack</b> and a strong foundation in web technologies, I
              thrive on solving complex problems and building seamless digital
              experiences. Explore my projects to see how I bring ideas to life
              through clean code and innovative solutions. If you're looking for
              a developer{" "}
              <i>
                who is eager to learn, adapt, and contribute to impactful
                projects, let’s connect!
              </i>
            </span>
          </p>
          <a
            href="https://pdf.ac/2HRmtq"
            target="_blank"
            className="btn btn-primary"
          >
            Resume
          </a>
        </div>
        <div className="card-footer text-body-secondary">
          If someone knows nothing, someone knows nothing.
          <br />
          If someone knows something, someone knows something. <br />
          If someone knows everything, someone is less than or equal to zero.
        </div>
      </div>
    </div>
  );
};

export default Home;
