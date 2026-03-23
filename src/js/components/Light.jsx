import react from "react";


const Light = ({ color, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{

        width: "80px",
        height: "80px",
        borderRadius: "50%",
        margin: "auto 0",
        backgroundColor: color,
        opacity: isActive ? 1 : 0.3,
        cursor: "pointer"
        
      }}
    ></div>
  );
};

export default Light;