import {
  useState,
  // useEffect,
  // useMemo,
  // useRef,
  // useContext,
  // useCallback,
} from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  const ary = ["one", "two"];

  const [isSidebarOnLeft, setIsSidebarOnLeft] = useState<boolean>(true);
  return (
    <div className="flex h-screen w-screen">
      <Sidebar leftAlign={isSidebarOnLeft} />
      <div className="flex flex-col justify-center items-center order-2 grow">
        <button
          className="flex h-10 w-40 items-center shrink-0"
          onClick={() => setIsSidebarOnLeft((prev) => !prev)}
        >
          Toggle Sidebar
        </button>
        {ary.map((item) => {
          return (
            <div className="whitespace-pre" key={item}>
              {item}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
