import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="_4O4page">
      <img
        src="https://i.ibb.co/85HwCVj/4-O4-ERROR.jpg"
        alt="Error-page-not-found"
      />
      <div className="btn-absolute">
        <Link to="/">
          <button className="go-backBtn">Go-Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
