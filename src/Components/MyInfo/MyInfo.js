import React from "react";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div className="myinfo-container">
      <h4>Salma Tabassum Mouri</h4>
      <p>Shyamoli,Dhaka</p>

      <div className="info">
        <div>
          <h4>50kg</h4>
          <p>Weight</p>
        </div>
        <div>
          <h4>5.1</h4>
          <p>Height</p>
        </div>
        <div>
          <h4>26years</h4>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
