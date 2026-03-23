
import React, { useState } from "react";
import Light from "./Light";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  const changeLight = () => {
    if (light === "red") {
      setLight("green");
    } else if (light === "green") {
      setLight("yellow");
    } else {
      setLight("red");
    }
  };

  return (
    <div
      style={{
        background: "black",
        width: "120px",
        padding: "20px",
        borderRadius: "10px",
        margin: "auto " 
      }}
    >
      <Light color="red" isActive={light === "red"} onClick={changeLight} />
      <Light color="yellow" isActive={light === "yellow"} onClick={changeLight} />
      <Light color="green" isActive={light === "green"} onClick={changeLight} />
    </div>
  );
};

export default TrafficLight;