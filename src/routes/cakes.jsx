import { useEffect } from "react";
import { axiosGet } from "../data";
import { useState } from "react";
import { Card, Button } from 'react-bootstrap'

export default function Cakes() {
  const [cakeItems, setCakeItems] = useState([]);

  useEffect( () => {
    async function fetchData() {
      // You can await here
      const response = await axiosGet()
      setCakeItems(response.results)
      // ...
      console.log({response})
    }
    fetchData();
  }, []);

  let cakes = cakeItems.filter( product => product.category===1)

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Cakes</h2>
      <p>This is the cakes page.</p>
      <div className="products">
        
          {cakes.map((cake) => (
            <Card key={cake.name} border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={'/floraison/' + cake.photo} />
            <Card.Body>
              <Card.Title>{cake.name}</Card.Title>
              <Card.Text>
                {cake.description}
                {console.log('Photo: ' +cake.photo)}
                {cake.price}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          ))}
        
        
      </div>
    </main>
  );
}
