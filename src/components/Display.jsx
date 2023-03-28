import React from "react";

function Display(props) {
    return (
        <div className="display rounded">
          <p>{props.expr}</p>
       
        </div>
    )
  }

export default Display;