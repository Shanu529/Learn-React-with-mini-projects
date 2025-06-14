import React from "react";

function Navbar({ name, age, city, profession }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        width: "90px",
        padding: "5px",
      }}
    >
      <div style={{ width: "100%", height: "50%", backgroundColor: "black" }}>
        <img src="" alt="Profile" />
      </div>

      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default Navbar;