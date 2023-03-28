import React, { useEffect, useState } from 'react'

function Buttons(props) {
  useEffect(()=>{
    
  })
  let [exp, setExp] = useState("")
  console.log(exp);
  function handleClick(event) {
    let { name } = event.target
    if (name === 'AC') {
      setExp(() => {
        props.isAll()
      })
    } else if (name === "⬅️") {
      setExp(() => {
        props.isOne()
      })
    } 
    else if(name==="="){
        setExp( ()=>{
            props.result()
        })
    }else {
      
      setExp(() => {
        props.isClicked([name])
      })
    }

  
  }
  return (
    <div
      className="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group me-2" role="group" aria-label="Second group">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-secondary"
          name={props.num[0]}
        >
          {props.num[0]}
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-secondary"
          name={props.num[1]}
        >
          {props.num[1]}
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-secondary"
          name={props.num[2]}
        >
          {props.num[2]}
        </button>
      </div>
      <div className="btn-group" role="group" aria-label="Third group">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-info"
          name={props.num[3]}
        >
          {props.num[3]}
        </button>
      </div>
      <div className="btn-group" role="group" aria-label="Third group">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-info"
          name={props.num[4]}
        >
          {props.num[4] ==="**"?"^":props.num[4]}
        </button>
      </div>
    </div>
  )
}

export default Buttons
