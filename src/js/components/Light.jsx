import react from "react";
const Light=({color,Activity,onclick})=>{

    return (
<div>
      onClick={onClick}
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        margin: "10px",
        backgroundColor: color,
        opacity: isActive ? 1 : 0.3,
        cursor: "pointer"
      }}

</div>


    )

}

export default Light;