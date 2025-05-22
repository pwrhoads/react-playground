import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface SidebarProps {
  leftAlign?: boolean;
}

  const newAlignment = () => {
    setAlignment({
        alignment === "left" ? "right" : "left"
    });

//Probably a better way to do this
const [alignment, setAlignment] = useState("left");

const Sidebar = ({ leftAlign = true }: SidebarProps) => {

  return (
    <div
      className={`flex w-72 h-screen bg-blue-500 border-2 border-black ${
        leftAlign === "true" ? "mr-auto" : "ml-auto"
      }`}
    >
      Hello world
    </div>
  );
};

export default Sidebar;
