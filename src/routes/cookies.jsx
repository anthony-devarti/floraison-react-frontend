import { useState, useEffect } from "react";
import { axiosGet } from "../data";
import { Card, Button } from 'react-bootstrap'
import { useGlobalState } from "../components/GlobalState";
import CustomCookiePlatter from "../components/CustomCookiePlatter";

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

  const addToCart = ({id, starting_price, name}) => {
    const item = {name, id, unit_price:starting_price, message:null, special_instructions:null}
    dispatch([cart.push(item)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
    console.log(cart)
  }

  let cookies = cookieItems.filter( product => product.category===2 && product.published===true)
    return (
        <main className="product-page">
          <div className="superheader">Cookies</div>
          <p>This is the Cookies page.</p>
          <div className="products">
            
              {cookies.map((cookie) => (
               <Card key={cookie.name} border="dark" className="product-cards">
               <Card.Img src={cookie.photo} className="card-image"/>
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
          <CustomCookiePlatter />
        </main>
      );
  }