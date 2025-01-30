import React from "react";
import "./Project.css";
import data from "../../../../src/ProjectData";
const Project = () => {
  return (
    <>
      {" "}
      <div className=" d-flex flex-row justify-content-center flex-wrap m-4  gap-3">
        {data.map((d, i) => (
          <div key={i} class="card">
            <div class="card-image"><img src={d.image} width="100%" height="240"/></div>
            <div class="category">
              {" "}
              <b>{d.title}</b>{" "}
            </div>
            <div class="heading">
              <span>{d.description.substring(0, 50)}...</span>
            </div>
            <div class="heading">
              <b>Tools`</b>
              {d.tools.map((tool, i) => (
                <span key={i}>
                  <i>{tool.substring(0, 10)} </i>
                </span>
              ))}
            </div>
            <a className="btn1" href={d.link} target="_blank" style={{color:"white", textAlign:"center", textDecoration:"none", cursor:"pointer"}}>Hosted-Link</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
