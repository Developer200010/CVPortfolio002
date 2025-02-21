import React from "react";
import data from "../../../../src/Services";
import "./Service.css"; // Import custom styles

const Service = () => {
  return (
    <>
      <div className="p-2 d-flex flex-wrap flex-column gap-3">
        {data.map((data, index) => (
          <div key={index} className="card w-100 glass-card">
            <div className="card-header">{data.name}</div>
            <p className="card-text">{data.description}</p>
            <div className="card-body d-flex flex-wrap gap-3">
              {data.Tools.map((t, i) => (
                <a key={i} href="#" className="btn btn-primary">
                  {t}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
