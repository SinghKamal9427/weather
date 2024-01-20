import React from "react";
import "./Header.css";
import ffavicon from "./ffavicon.png";

export default function Header() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light  mynav-f  ">
        <div className="container-fluid">
          {/* <img src="" alt="" className="d-inline-block align-text-top"/> */}
          <div className="latext-f">
            <img src={ffavicon} alt="" />
            Weather App
          </div>
        </div>
      </nav>
    </div>
  );
}
