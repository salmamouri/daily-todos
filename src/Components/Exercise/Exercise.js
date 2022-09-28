import React from "react";
import { toast } from "react-toastify";
import "./Excercise.css";

const Exercise = ({ exTime, breaktime }) => {
  return (
    <div className="exercise-container">
      <div className="exercise-time">
        <h4>Exercise Time: {exTime}hours</h4>
      </div>
      <div className="break-time">
        <h4>Break Time : {breaktime}s </h4>
      </div>
      <button
        onClick={() => toast.success("Congratulations!!! You are Done.")}
        className="complete-btn"
      >
        Activity Completed
      </button>
    </div>
  );
};

export default Exercise;
