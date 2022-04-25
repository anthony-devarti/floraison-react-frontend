import { getCupcakeMenu } from "../data";
import { Link, Outlet } from "react-router-dom";

export default function Cupcakes() {
  let cupcakeMenu = getCupcakeMenu();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {cupcakeMenu.map((cupcake) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${cupcake.number}`}
            key={cupcake.number}
          >
            {cupcake.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
