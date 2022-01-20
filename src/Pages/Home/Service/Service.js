import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  return (
    <div className="single-service">
      <img src={img} alt="" />
      <h3 className="service-title bg-success mt-1">{name}</h3>
      <h3 className="service-fee text-black">Price: {price} tk</h3>
      <p className="service-description">{description}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-info">Book-Service</button>
      </Link>
    </div>
  );
};

export default Service;
