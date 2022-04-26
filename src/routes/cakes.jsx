import { useEffect } from "react";
import { axiosGet, getMenu, sendGetRequest } from "../data";
import axios from "axios";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Card, Button, Container } from 'react-bootstrap'
import { useParams } from "react-router";

export default function Cakes() {
  //I need to hand products down to this function as a prop
  const [products, setProducts] = useState([]);

  useEffect( () => {
    async function fetchData() {
      // You can await here
      const response = await axiosGet()
      setProducts(response.results)
      // ...
      console.log({response})
    }
    fetchData();
  }, []);

  let cakes = products.filter( product => product.category==1)

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Cakes</h2>
      <p>This is the cakes page.</p>
      <div className="products">
        
          {cakes.map((cake) => (
            <Card key={cake.name} border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src='' />
            <Card.Body>
              <Card.Title>{cake.name}</Card.Title>
              <Card.Text>
                {cake.description}
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
