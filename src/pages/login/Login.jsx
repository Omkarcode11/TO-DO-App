import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import useFetch from "../../hooks/useFetch";
import { BaseUrl } from "../../utils/BaseUrl";
import { useDispatch } from "react-redux";
import { addUser, isAuthenticated } from "../../store/useSlice";
import { setTodo } from "../../store/todoSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "" });
  const [showPassword, setShowPassword] = useState("password");
  function show() {
    if (showPassword == "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  async function loginHandler() {
    let users = await JSON.parse(localStorage.getItem("todoUser"));
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === user.name) {
        if (users[i].password === user.password) {
            console.log(users[i])
          dispatch(addUser({ name: user.name, id: i }));
          dispatch(setTodo({todo:users[i].todo,id:i}))
        }
      }
    }
    navigate('/home')
  }

  return (
    <div className="register-Layout">
      <img src="./TodoLogo.png" className="logo-login" alt="logo" />
      <div className="register-girl">
        <div className="form">
          <div className="form-heading">login</div>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <div className="showPassword">
            <input
              type={showPassword}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <img src="./eye-icon.png" width={"20px"} onClick={show} />
          </div>
          <div className="regButtonLay">
            <button className="register-button" onClick={loginHandler}>
              login
            </button>
            <div>
              not have an account?<Link to={"/register"}>register</Link>
            </div>
          </div>
        </div>
      </div>
      <img src="./loginGirlBoy.png" className="girl2" />
      <img src="./ecipse2.png" className="eclipse" />
    </div>
  );
}

export default Login;
