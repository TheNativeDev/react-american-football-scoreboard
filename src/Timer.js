import React, { useState, useEffect } from "react";
import "./App.css";

const Timer = props => {
  const [countDown, setCountDown] = useState(12 * 60);

  useEffect(() => {
    let myTimer = null;

    if (props.timeControl === "pause") {
      clearInterval(myTimer);
    } else if (props.timeControl === "resume") {
      myTimer = setInterval(() => setCountDown(countDown - 1), 1000);
    } else {
      setCountDown(12 * 60);
      clearInterval(myTimer);
    }

    return () => clearInterval(myTimer);
  }, [props, countDown]);

  return (
    <>{`${Math.floor(countDown / 60)}:${
      countDown % 60 < 10 ? `0${countDown % 60}` : countDown % 60
    }`}</>
  );
};

export default Timer;