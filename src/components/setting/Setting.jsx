import React from "react";
import "./Setting.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store/useSlice";
import { useNavigate } from "react-router-dom";
import { changeTheme } from "../../store/themeSlice";

function Setting({ setShowSetting }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutHandler() {
    let log = confirm("Are you Sure for logout");
    if (log) {
      dispatch(logout());
      navigate("/login");
    }
  }

  return (
    <div className="setting-layout">
      <div className="settingHeading">
        <h2>Setting</h2>
        <img
          src="./X.png"
          width={"30px"}
          onClick={() => setShowSetting(false)}
        />
      </div>
      <div className="selectTheme">
        <img src="./colorPalet.png" alt="color-palet" width={"30px"} />
        <div>select theme</div>
      </div>
      <input type="color" className="colors" onChange={(e)=>{
        dispatch(changeTheme(e.target.value))}}/>
      <button className="logout" onClick={logoutHandler}>
        <img src="./logout.png" width={"30px"} alt="logout" />
        <div>logout</div>
      </button>
    </div>
  );
}

export default Setting;
