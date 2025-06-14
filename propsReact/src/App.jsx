import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsCard from "./components/PropsCard";

function App() {
  const [count, setCount] = useState(0);

  let obj =
  {
    name: "shunya",
    age: 20,
    city: "nerwa"
  }

  return (
    <>
      <PropsCard name="shunya" btn="click me"/>
      <PropsCard name="shu" btn="visit me"/>
    </>
  );
}

export default App;
