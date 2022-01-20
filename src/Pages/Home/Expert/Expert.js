import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, expertize, img } = expert;
  return (
    <div
      className="col border border-4 p-2 g-2 alice-blue expert-person"
      style={{ boxSizing: "border-box" }}
    >
      <img src={img} alt="" className="w-100 img-thumbnail" />
      <h2 className="py-2 text-success">{name}</h2>
      <h5>Expertize : {expertize}</h5>
    </div>
  );
};

export default Expert;
