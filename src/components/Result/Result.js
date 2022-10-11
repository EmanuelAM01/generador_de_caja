import React, { useState } from "react";


const Result = (props) =>{
    const {allColors} = props;
    return(
        <div style={{height: "auto", width: "800px"}}>
        <div style={{display: "flex", alignContent: "center", marginTop: "50px"}}>
                {allColors.map((color) => {
                    return <div style={{height: color.height + "px",width: color.width +"px", padding: '12px 15px', background: color.color, marginLeft: "50px"}}> </div>})}
        </div>
        </div>
        
    )
}
export default Result;