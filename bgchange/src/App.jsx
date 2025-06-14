import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full justify-center flex flex-wrap justify-content-space-evenly gap-5 h-screen"
        style={{ backgroundColor: color }}
      ></div>

      <div className=" justify-center flex flex-wrap justify-content-space-evenly gap-5  ">
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 rounded  py-3 px-10"
        >
          green
        </button>
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 rounded  py-3 px-10"
        >
          red
        </button>
        <button
          onClick={() => setColor("gray")}
          className="bg-gray-500 rounded  py-3 px-10"
        >
          gray
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 rounded  py-3 px-10"
        >
          blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 rounded  py-3 px-10"
        >
          yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 rounded  py-3 px-10"
        >
          purple
        </button>
      </div>
    </>
  );
}

export default App;
