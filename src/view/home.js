import React from "react";
import "./css/home.css";
import Sidebar from "./sidebar";

import Topnav from "./topnav";

function Home() {
  return (
    <div className="home-layout">
      <Topnav />
      <div className="home-content-layout">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
