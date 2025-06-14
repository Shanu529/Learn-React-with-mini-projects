import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);

  const [charAllowed, setCharAllowed] = useState(false);

  const [numAllowes, setNumAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passweordGenerator = useCallback(() => {
    let pass = "";
    let char 
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (charAllowed) {
      str += "!@#$%^&*()_+{}[]:;<>?,./|\\-=`~";
    }

    if (numAllowes) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
       pass += str.charAt(char);
    }

    // pass += str.charAt(char);

    console.log(pass);

    setPassword(pass);
  }, [length, charAllowed, numAllowes]);

  useEffect(()=>{

    passweordGenerator();

  }, [length, charAllowed,numAllowes, passweordGenerator])

  let change = (e) => [setLength(e.target.value)];

  const CopyPassword = useCallback (()=>{
   

    navigator.clipboard.writeText(password)
    PassWordRef.current?.select();
  }, [password])





  return (
    <>
      <div className="bg-gray-600">
        <h1>Password Generater</h1>

        <input
          type="text"
          value={password}
          placeholder="Password"
          className="w-80 p-3 m-3 rounded-lg"
        />
        <button className=" bg-blue-800 p-3 rounded-lg hover:bg-blue-600"
        onClick={ CopyPassword}>copy</button>

        <div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            // onChange={(e) => {setLength(e.target.value)}}
            onChange={change}
            className="mx-4 m-4"
          />

          <label>length : {length}</label>

          {/* <input type="checkbox"
          defaultChecked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)
            console.log(e.target.checked)
          }
         
          />Character */}

          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e)=>{
              setCharAllowed(e.target.checked)
            }}

            className=" m-5"
           
          /> Character

          <input type="checkbox"
          checked={numAllowes}
          onChange={(e)=>{

            setNumAllowed(e.target.checked)

          }} className="m-5"
          
          /> Numbers
        </div>
      </div>
    </>
  );
}

export default App;



