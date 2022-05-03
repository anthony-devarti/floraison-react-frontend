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

  const addToCart = ({id, starting_price}) => {
    const item = {id, unit_price:starting_price, message:null, special_instructions:null}
    dispatch([cart.push(item)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
    console.log(cart)
  }

  let cupcakes = cupcakeItems.filter( product => product.category===3 && product.published===true)
    return (
        <main className='product-page'>
          <div className='superheader'>Cupcakes</div>
          <p>This is the cupcakes page.</p>
          <div className="products">
            
              {cupcakes.map((cupcake) => (
                <Card key={cupcake.name} border="dark" className='product-cards'>
                <Card.Img variant="top" src={cupcake.photo} className="card-image"/>
                <Card.Body>
                  <Card.Title>{cupcake.name}</Card.Title>
                  <Card.Text>
                    {cupcake.description}
                    {cupcake.price}
                  </Card.Text>
                  <Button onClick={()=> addToCart(cupcake)} className="custom-buttons" variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
              ))}
            
            
          </div>
        </main>
      );
}
