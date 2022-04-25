import { useParams } from "react-router";
import { getCupcake } from "./data";


export default function Cupcake() {
    let params = useParams();
    let cupcake = getCupcake(parseInt(params.cupcakeID, 10));
    return (
        <main style={{ padding: "1rem" }}>
          <h2>Total Due: {cupcake.amount}</h2>
          <p>
            {cupcake.name}: {cupcake.number}
          </p>
          <p>Due Date: {cupcake.due}</p>
        </main>
    );
}