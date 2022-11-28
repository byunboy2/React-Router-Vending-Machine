import { useParams } from "react-router-dom";

function Snacks() {
  const { params } = useParams();
  return (
    <div>
      <h1>You chose {params}</h1>
    </div>


  );
}

export default Snacks;
