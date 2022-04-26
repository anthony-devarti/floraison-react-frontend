import { useState, useEffect } from "react";
import { axiosGet } from "../data";
import { Card, Button } from 'react-bootstrap'

export default function Cookies() {

  const [cookieItems, setCookieItems] = useState([]);

  useEffect( () => {
    async function fetchData() {
      // You can await here
      const response = await axiosGet()
      setCookieItems(response.results)
      // ...
      console.log({response})
    }
    fetchData();
  }, []);

  let cookies = cookieItems.filter( product => product.category==2 && product.published==true)
    return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Cookies</h2>
          <p>This is the Cookies page.</p>
          <div className="products">
            
              {cookies.map((cookie) => (
                <Card key={cookie.name} border="dark" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cookie.image} />
                <Card.Body>
                  <Card.Title>{cookie.name}</Card.Title>
                  <Card.Text>
                    {cookie.description}
                    {cookie.price}
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
              ))}
            
            
          </div>
        </main>
      );
  }