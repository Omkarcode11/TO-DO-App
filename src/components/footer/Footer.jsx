import React, { useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todoSlice";

function Footer({ setShowCompleteTodo }) {
  const [addTodoBar, setAddTodoBar] = useState(true);
  const [todo, setTodo] = useState({ title: "", todo: "" });
  const theme = useSelector((state)=>state.theme)
  const dispatch = useDispatch();
 

  const addTodoHandler = () => {
    dispatch(addTodo(todo))
    setAddTodoBar(true)
  };

  const handleChange = (e) =>
    setTodo({ ...todo, [e.target.name]: e.target.value });

  return (
    <div className="footer-layout">
      {!addTodoBar ? (
        <div className="addNewTodo" onChange={handleChange}>
          <ContentWrapper>
            <div className="addNewTodoHeading">Add new Todo</div>
            <input
              type="text"
              placeholder="Title"
              className="addNewTodoInput"
              name="title"
            />
            <textarea
              rows={10}
              name="todo"
              cols={22}
              type="text"
              placeholder="description"
              className="addNewTodoInput"
            />
            <div className="addCanButton">
              <button style={{backgroundColor:theme}} onClick={() => setAddTodoBar(true)}>Cancel</button>
              <button style={{backgroundColor:theme}} onClick={addTodoHandler}>Add</button>
            </div>
          </ContentWrapper>
        </div>
      ) : (
        <ContentWrapper>
          <div className="subButton">
            <button onClick={() => setShowCompleteTodo(true)}>
              active todos
            </button>
            <button onClick={() => setShowCompleteTodo(false)}>
              completed todos
            </button>
          </div>
          <div className="addTodo">
            <button style={{backgroundColor:theme}} onClick={() => setAddTodoBar(false)}>Add New Todo</button>
          </div>
        </ContentWrapper>
      )}
    </div>
  );
}

export default Footer;
