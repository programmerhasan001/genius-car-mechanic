import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("./experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div className="container" id="experts">
      <h2 className="text-primary text-center py-3">Our Experts</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
