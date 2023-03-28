import React, { useState } from 'react'
import Buttons from "./Button"
import Display from './Display'
function App() {
    let [text, setText] = useState("")
    function isDisplay(param){
        
          setText( (prev) => {
               return(prev+param)
          })
    }
    function deleteAll(){
        setText("")
    }
    function deleteOne(){
        setText( ()=>{
            text = text.substring(0, (text.length) - 1)
            return text
        })
    }
    function isReady() {
        setText( ()=>
        {
          try{
                return eval(text).toString()
                 
          }
          catch(err){
               return "Invalid input"
          }
            
        })
      }
    
    
  return (
    <div className="frame">
    <p className='heading'>Calculator</p>
      <Display expr={text}/>
      <div className="inputs">
      <Buttons num={["7", "8", "9", "*", "AC"]} isClicked={isDisplay} isAll={deleteAll} />
      <Buttons num={["4", "5", "6", "-", "⬅️"]} isClicked={isDisplay}  isOne={deleteOne}/>
      <Buttons num={["1", "2", "3", "+", "**"]} isClicked={isDisplay} />
      <Buttons num={["%", "0", ".", "=", "/"]} isClicked={isDisplay} result={isReady}/>
      </div>
    </div>
  )
}

export default App
