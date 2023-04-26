import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import Setting from "../setting/setting";

function Header() {
  const name = useSelector((state) => state.user.name);
  const [showSetting,setShowSetting] = useState(false)
  return (
    <div className="header-layout">
      <div>
        <img src="./TodoLogo.png" alt="logo" />
      </div>

      <div className="options-setting">
        <div>{name}</div>
        <img src="./setting.png" width={"35px"} onClick={()=>setShowSetting(true)} />
      </div>
      {
      showSetting &&
      <Setting setShowSetting={setShowSetting} />
      }
    </div>
  );
}

export default Header;
