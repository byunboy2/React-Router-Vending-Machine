
import VendingMachine from "./VendingMachine";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";

/** Vending machine application with list of snacks to choose from. */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack/:name" element={<Snack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
