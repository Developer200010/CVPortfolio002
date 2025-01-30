import React from "react";
import data from "../../../../src/Services";
const Service = () => {
  return (
    <>
      <div className="p-2 d-flex flex-wrap flex-column gap-3 ">
        {data.map((data) => (
          <div class="card w-100 ">
            <div class="card-header">{data.name}</div>
            <p class="card-text">
              {data.description}
            </p>
            <div class="card-body d-flex flex-wrap gap-3">
              {data.Tools.map((t) => (
                <a href="#" class="btn btn-primary">
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
