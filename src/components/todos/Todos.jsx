import React, { useState } from "react";
import "./Todos.css/";
import TodoCard from "../todoCard/TodoCard";
import { useSelector } from "react-redux";

function Todos({ showCompleteTodo }) {
  const myTodos = useSelector((state) => state.todo);
  const color = useSelector((state)=>state.theme)
  return (
    <div className="todos-layout" style={{backgroundColor:color}} >
      <h1>{showCompleteTodo ? "Active" : "Completed"}</h1>
      {showCompleteTodo
        ? myTodos?.active?.map((item, i) => (
            <TodoCard title={item.title} task={item.todo} key={i}  />
          ))
        : myTodos?.completed?.map((item, i) => (
            <TodoCard title={item.title} task={item.todo} key={i} />
          ))}
    </div>
  );
}

export default Todos;
