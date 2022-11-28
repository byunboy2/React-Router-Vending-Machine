
import VendingMachine from "./VendingMachine";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path="/snack/:name" element={<Snack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
