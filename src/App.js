import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Nav from "./Nav";

function App() {
  return (
    <div>
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
