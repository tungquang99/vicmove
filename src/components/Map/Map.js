import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
import "./map.scss";



const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
  } else {
    // Render a countdown
    return (
      <div className="text-map">
        Vị trí của bạn được chia sẻ còn lại trong:{" "}
        <span>
          {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </span>{" "}
        <Link to="/system" className="btn btn-lock" onClick={() => localStorage.removeItem("end_date")}>
          Dừng chia sẻ
        </Link>
      </div>
    );
  }
};

const getLocalStorageValue = (s) => localStorage.getItem(s);

function Map() {
  const [data, setData] = useState(
    { date: Date.now(), delay: 7200000 } //2 hours
  );
  const wantedDelay = 7200000; 
  const navigation = useNavigate();

  //Code runs only one time after each reloading
  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
      if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        //No update the end date with the current date
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div className="img-map">
      <Countdown
        date={data.date + data.delay}
        renderer={renderer}
        onStart={(delta) => {
          //Save the end date
          if (localStorage.getItem("end_date") == null)
            localStorage.setItem(
              "end_date",
              JSON.stringify(data.date + data.delay)
            );
        }}
        onComplete={() => {
          if (localStorage.getItem("end_date") != null)
            localStorage.removeItem("end_date");
            navigation('/system')
        }}
      />
    </div>
  );
}

export default Map;
