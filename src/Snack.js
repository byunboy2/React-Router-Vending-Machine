import { Link, useParams } from "react-router-dom";

/** Element to render when chosen by user
 *
 * App-> VendingMachine -> Snack
*/
function Snacks() {
  const params = useParams();
  return (
    <div>
      <h1>You chose {params.name}</h1>
      <Link to="/">Choose another snack</Link>
    </div>


  );
}

export default Snacks;
