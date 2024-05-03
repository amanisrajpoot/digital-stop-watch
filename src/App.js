import "./styles.css";
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      {!isRunning && !time ? (
        <button className="start" onClick={startStop}>
          Start
        </button>
      ) : isRunning ? (
        <button className="pause" onClick={pause}>
          Pause
        </button>
      ) : !isRunning ? (
        <button className="resume" onClick={startStop}>
          Resume
        </button>
      ) : null}
      <button className="stop" onClick={reset}>
        Stop
      </button>
    </div>
  );
}

export default Stopwatch;
