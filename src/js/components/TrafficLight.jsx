import React, { useState } from "react";
import Light from "./Light";



const TrafficLight = () => {

 const [light, setLight] = useState("red");

    const changeLight = () => {
        setLight(
            light === "red"
                ? "green"
                : light === "green"
                    ? "yellow"
                    : "red"
        )
    }

return (

 <div className="Body-trafficLight" >
      <Light color="red" isActive={light === "red"} onClick={changeLight} />
      <Light color="yellow" isActive={light === "yellow"} onClick={changeLight} />
      <Light color="green" isActive={light === "green"} onClick={changeLight} />
    </div>


)
}

export default TrafficLight;