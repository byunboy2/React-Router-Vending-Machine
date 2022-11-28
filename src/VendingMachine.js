import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const defaultSnacks = ["Chips","Soda","Candy"]

function VendingMachine() {
  const [snack, setSnack] = useState("");

  return (
    <div>
      <p>"Hello, I am a vending machine! What would you like to eat?"</p>

      <nav className="NavBar">
      {/* <Link to="/">
        Home
      </Link>
      <Link to="/Chips">
        Chips
      </Link>
      <Link to="/Soda">
        Soda
      </Link>
      <Link to="/Candy">
        Candy
      </Link> */}
    </nav>
 </div>
  );
}


export default VendingMachine;