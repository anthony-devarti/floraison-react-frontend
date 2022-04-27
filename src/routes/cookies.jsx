import { useState, useEffect } from "react";
import { axiosGet } from "../data";
import { Card, Button } from 'react-bootstrap'
import { useGlobalState } from "../components/GlobalState";

export default function Cookies() {

  const [cookieItems, setCookieItems] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const response = await axiosGet()
      setCookieItems(response.results)
    }
    fetchData();
  }, []);


  //cart behavior
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart
  const addToCart = (product) => {
    dispatch([cart.push(product)])
  }

  let cookies = cookieItems.filter( product => product.category===2 && product.published===true)
    return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Cookies</h2>
          <p>This is the Cookies page.</p>
          <div className="products">
            
              {cookies.map((cookie) => (
               <Card key={cookie.name} border="dark" style={{ width: "18rem" }}>
               <Card.Img src={cookie.photo} />
               <Card.Body>
                 <Card.Title>{cookie.name}</Card.Title>
                 <Card.Text>{cookie.description}</Card.Text>
                 <Card.Footer className="dan-schneider">
                   <Button onClick={()=> addToCart(cookie)} className="custom-buttons card-buttons">
                     Add to Cart
                   </Button>
                   <p style={{ textAlign: "right"}}>{cookie.starting_price}</p>
                 </Card.Footer>
               </Card.Body>
             </Card>
              ))}
            
            
          </div>
        </main>
      );
  }