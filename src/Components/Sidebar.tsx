import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface SidebarProps {
  leftAlign?: boolean;
}

const Sidebar = ({ leftAlign = true }: SidebarProps) => {
  return (
    <div
      className={`flex w-72 h-screen bg-blue-500 border-2 border-black ${
        leftAlign === true ? "order-1" : "order-3"
      }`}
    >
      Hello world
    </div>
  );
};

export default Sidebar;
