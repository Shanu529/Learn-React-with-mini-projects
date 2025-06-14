// import React, { useState } from 'react';

// const Game = () => {

//   const [num, setNum] = useState(0); // ✅ useState declared correctly

//   const decrefun = () => { // this is arrow function
//     setNum(num - 10); // ✅ simple decrease
//   };

//   const increfun = () => { //again this is arrow function
//     setNum(num + 10); // ✅ simple decrease
//   };

//   return (
//     <div>
//       <h2>hlo {num}</h2>

//       <button onClick={increfun}>Set to 10</button> {/* ✅ works now */}
//       <button onClick={decrefun}>Decrease by 10</button>
//     </div>
//   );
// };

// export default Game;

// const Game =()=>{

//   const [num, setNum] = useState(0);

//   const upfun =()=>{
//     setNum(num -10);

//   };

//   const dowfun =()=>{
//     setNum(num +10);
//   };

//   return (
//     <div>
//       <h2>
//         the number is {num}
//       </h2>
//       <button onClick={upfun}>up</button>
//       <button onClick={dowfun}>down</button>
//     </div>
//   );
// };

// export default Game;

// import React from "react";
// import Navbar from "./Components/Navbar";

// const Hlo = () => {
//   const user = [
//     {
//       name: "Aarav Mehta",
//       age: 28,
//       city: "Mumbai",
//       profession: "Software Engineer",
//     },
//     {
//       name: "Sneha Kapoor",
//       age: 24,
//       city: "Delhi",
//       profession: "Graphic Designer",
//     },
//     {
//       name: "Rahul Sharma",
//       age: 35,
//       city: "Bangalore",
//       profession: "Marketing Manager",
//     },
//     {
//       name: "Anita Joshi",
//       age: 31,
//       city: "Pune",
//       profession: "Data Analyst",
//     },
//     {
//       name: "Vikram Patel",
//       age: 40,
//       city: "Ahmedabad",
//       profession: "Civil Engineer",
//     },
//   ];

//   return (
//     <div>
//       {user.map((nim, index) => (
//         <Navbar key={index} {...nim} />
//       ))}
//     </div>
//   );
// };

// export default Hlo;

// import React from 'react'

// export const user = () => {

//   return (

//     <Navbar />
//   )
// }

import React, { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);
  // let counter = 15;

  let addvalue = () => {
    console.log(counter);
    if (counter <= 19) {
      setcounter(counter + 1);
    } else {
      alert("value is already 20");
    }
  };

  let decrevalue = () => {
    console.log(counter);
    if (counter >= 1) {
      setcounter(counter - 1);
    } else {
      alert("value is already zero");
    }
  };
  return (
    <>
      <div>
        <h2>this is counter of numbers {counter}</h2>
        <button onClick={addvalue}>increase value {counter}</button>
        <button onClick={decrevalue}>decrease value{counter}</button>
      </div>
    </>
  );
}

export default App;
