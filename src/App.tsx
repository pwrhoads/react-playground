import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  const [isSidebarOnLeft, setIsSidebarOnLeft] = useState<boolean>(true);
  return (
    <div className="flex h-screen w-screen">
      <Sidebar leftAlign={isSidebarOnLeft} />
      <div className="flex-1 flex justify-center items-center order-2">
        <button
          className="flex h-10 w-40 items-center"
          //Trying to understand what all of this does
          //onClick={} ---When mouse button is clicked, do everything between the curly braces
          // () => ---We call a function that has no parameters Everything after the arrow is what's returned from the function
          onClick={() => setIsSidebarOnLeft((prev) => !prev)}
        >
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
}

export default App;
