import React from "react";
import "./Options.css";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, editTodo } from "../../store/todoSlice";

function Options({ title }) {
  const dispatch = useDispatch();

  function optionsHandler(e) {
    if (e.target.name === "deleteTodo") dispatch(deleteTodo(title));
    else if (e.target.name === "editTodo") {
      let newTitle = prompt('New title')
      let newTodo = prompt("New Todo")
      let data = {title:newTitle,todo:newTodo}
      dispatch(editTodo({title,newTitle:data}))
    }
    else if (e.target.name === "completeTodo") dispatch(completeTodo(title));
  }

  return (
    <div className="options-layout" onClick={optionsHandler}>
      <img
        src="./correct.png"
        width={"50px"}
        alt="completeTodo"
        name="completeTodo"
      />
      <img
        src="./edit.png"
        width={"40px"}
        height={"37px"}
        alt="editTodo"
        name="editTodo"
      />
      <img src="./delete.png" width={"45px"} alt="delete" name="deleteTodo" />
    </div>
  );
}

export default Options;
