import { useParams } from "react-router-dom"

function Snack() {
  const params = useParams();
  return (
    <div>
      <h1>You chose { params.snack }!</h1>
    </div>
  );
}

