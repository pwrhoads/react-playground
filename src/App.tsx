import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex max-w-72 bg-blue border border-black">
      <Sidebar />
    </div>
  );
}

export default App;
