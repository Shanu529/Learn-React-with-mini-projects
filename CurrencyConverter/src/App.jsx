import React from "react";
import "./App.css";
import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./Compo/Hooks/useCurrencyInfo";

function App() {
  const [Amount, setAmount] = useState(0);
  
  //https://v6.exchangerate-api.com/v6/2fd90ac0868802c1e1452ee9/latest/inr

    
  return (
    <>
     

      <div>{setAmount}</div>

      <div>
       <InputBox />
      </div>
    </>
  );
}

export default App;
