import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: "", password: "" , todo:{active:[],completed:[]} });
  const [showPassword, setShowPassword] = useState("password");
  function show() {
    if (showPassword == "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  async function register() {
    let users = localStorage.getItem("todoUser");
    if (!users || users == "") {
      localStorage.setItem("todoUser", JSON.stringify([user]));
    } else {
      users = await JSON.parse(users);
      users.push(user);
      localStorage.setItem("todoUser", JSON.stringify(users));
    }
    navigate('/login')
  }

  return (
    <div className="register-Layout">
      <img src="./TodoLogo.png" className="logo-login" alt="logo" />
      <div className="register-girl">
        <div className="form">
          <div className="form-heading">create a new account</div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <div className="showPassword">
            <input
              type={showPassword}
              placeholder="Password"
              name="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <img src="./eye-icon.png" width={"20px"} onClick={show} />
          </div>
          <div className="regButtonLay">
            <button className="register-button" onClick={register}>
              register
            </button>
            <div>
              already have an account?<Link to={"/login"}>login</Link>
            </div>
          </div>
        </div>
      </div>
      <img src="./CasulLife2.png" className="girl2" />
      <img src="./ecipse2.png" className="eclipse" />
    </div>
  );
}

export default Register;
