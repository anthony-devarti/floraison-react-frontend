import { getCupcakeMenu } from "../data";
import { Link, Outlet } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

export default function Cupcakes() {
  let cupcakeMenu = getCupcakeMenu();
  
  return (
    <>
      <h2>Cupcakes</h2>
      <h3>It's like a cake, but smaller.</h3>
      <div className="products">
        
          {cupcakeMenu.map((cupcake) => (
            <Card key={cupcake.name} border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src='' />
            <Card.Body>
              <Card.Title>{cupcake.name}</Card.Title>
              <Card.Text>
                {cupcake.description}
                {cupcake.price}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        
        
      </div>
    </>
  );
}
