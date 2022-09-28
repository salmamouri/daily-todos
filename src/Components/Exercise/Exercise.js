import React from "react";
import "./Excercise.css";

const Exercise = ({ exTime }) => {
  return (
    <div className="exercise-container">
      <div className="exercise-time">
        <h4>Exercise Time:</h4>
        <h4>{exTime}hours</h4>
      </div>
    </div>
  );
};

export default Exercise;
