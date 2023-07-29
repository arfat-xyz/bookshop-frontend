"use strict";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" bg-slate-800">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
