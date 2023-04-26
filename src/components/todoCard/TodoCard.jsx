import React, { useState } from "react";
import "./TodoCard.css";
import Options from "../options/Options";

function TodoCard({ title, task }) {

 const [show ,setShow ]  = useState('none')

 function showHandler(){
  if(show=='none'){
    setShow('flex')
  }else{
    setShow('none')
  }
 }

  return (

    <div className="todoCard-Layout" onClick={showHandler}>
      <div className="titleTodo">{title}</div>
      <div className="taskTitle">{task}</div>
      <div style={{display:`${show}`}}>
      <Options title={title}/>
      </div>
    </div>
  );
}

export default TodoCard;
