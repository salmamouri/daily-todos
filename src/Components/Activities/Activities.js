import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import MyInfo from "../MyInfo/MyInfo";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [exTime, setExTime] = useState(0);
  const [breaktime, setBreaktime] = useState(
    localStorage.getItem("breaktime") ? localStorage.getItem("breaktime") : 0
  );

  useEffect(() => {
    fetch("todosData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  const addToList = (activity) => {
    console.log(activity.time);
    let totalTime = exTime + activity.time;
    setExTime(totalTime);
    console.log(totalTime);
  };
  const setBreak = (time) => {
    setBreaktime(time);
    localStorage.setItem("breaktime", time);
  };
  return (
    <div className="container">
      <div className="activity-container">
        {activities.map((activity) => (
          <Activity
            activity={activity}
            addToList={addToList}
            key={activity.id}
          ></Activity>
        ))}
      </div>
      <div className="time-container">
        <MyInfo></MyInfo>
        <Break setBreak={setBreak}></Break>
        <Exercise
          exTime={exTime}
          breaktime={breaktime}
          setBreak={setBreak}
        ></Exercise>
      </div>
    </div>
  );
};

export default Activities;
