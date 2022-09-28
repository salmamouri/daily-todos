import React from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
  const { name, img, details, time } = activity;
  return (
    <div className="active-container">
      <img src={img} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>Topics: {details}</p>
        <h4>Required Time: {time}</h4>
      </div>
      <button className="btn-add">Add to list</button>
    </div>
  );
};

export default Activity;
