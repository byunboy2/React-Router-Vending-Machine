
import { Link } from "react-router-dom";

const defaultSnacks = ["chips","soda","candy"]

function VendingMachine({ snacks = defaultSnacks }) {
  return (
    <div>
      <p>"Hello, I am a vending machine! What would you like to eat?"</p>
      <ul>
      {snacks.map(snack  => (
        <li key={snack}>
          <Link to={`/snack/${snack}`}>Show me {snack}!</Link>
        </li>
      ))}
    </ul>
 </div>
  );
}


export default VendingMachine;