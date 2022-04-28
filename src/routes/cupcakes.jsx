import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { axiosGet } from '../data'
import { useGlobalState } from '../components/GlobalState';

export default function Cupcakes() {
  const [cupcakeItems, setCupcakeItems] = useState([]);

  useEffect( () => {
    async function fetchData() {
      // You can await here
      const response = await axiosGet()
      setCupcakeItems(response.results)
      // ...
      console.log({response})
    }
    fetchData();
  }, []);

  //cart behavior
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart
  const addToCart = (product) => {
    dispatch([cart.push(product)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }

  let cupcakes = cupcakeItems.filter( product => product.category===3 && product.published===true)
    return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Cupcakes</h2>
          <p>This is the cupcakes page.</p>
          <div className="products">
            
              {cupcakes.map((cupcake) => (
                <Card key={cupcake.name} border="dark" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cupcake.photo} />
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
        </main>
      );
}
