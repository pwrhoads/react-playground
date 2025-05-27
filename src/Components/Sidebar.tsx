import React, { memo, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface SidebarProps {
  leftAlign?: boolean;
}

const Sidebar = ({ leftAlign = true }: SidebarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [welcomeMsg, setWelcomeMsg] = useState<string>(
    "Sidebar is on the left"
  );

  //Proof of Concept for useEffect. Much better ways to handle this
  useEffect(() => {
    if (!leftAlign) {
      setWelcomeMsg("Sidebar is on the right");
    } else {
      setWelcomeMsg("Sidebar is on the left");
    }
  }, [leftAlign]);

  return (
    <div
      className={`flex ${
        open ? "w-72" : "w-20"
      } h-screen bg-red-500 border-2 border-black ${
        leftAlign ? "order-1" : "order-3"
      }`}
    >
      <div className={`flex h-10 grow items-center`}>
        {open && (
          <h3 className="flex justify-center grow order-2">{welcomeMsg}</h3>
        )}
        <FaAngleRight
          className={`flex cursor-pointer h-10 w-10 ${
            leftAlign ? "ml-auto order-3" : "mr-auto order-1"
          }  ${
            (leftAlign && open) || (!leftAlign && !open) ? "rotate-180" : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default memo(Sidebar);
