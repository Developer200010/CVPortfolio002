import React from "react";
import "./Project.css"; // Import the updated styles
import data from "../../../../src/ProjectData";

const Project = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center flex-wrap m-4 gap-3">
        {data.map((d, i) => (
          <div key={i} className="card project-card">
            <div className="card-header">
              <b>{d.title}</b>
            </div>
            <div className="card-body">
              <div className="card-image">
                <img src={d.image} width="100%" height="200" alt={d.title} />
              </div>
              <p className="card-text">{d.description.substring(0, 80)}...</p>
              <div className="tools">
                <b>Tools:</b>
                {d.tools.map((tool, i) => (
                  <span key={i} className="tool">
                    {tool}
                  </span>
                ))}
              </div>
              <a
                className="btn btn-outline-light"
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hosted-Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
