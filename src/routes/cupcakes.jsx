import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { axiosGet } from '../data'
import { useGlobalState } from '../components/GlobalState';

export default function Cupcakes() {
  const [menu, setMenu] = useState([]);
  
  
  //behavior to fetch menu.  This is the same on all 3 category pages and I can't figure out how to consolidate it.
  useEffect(() => {
    let saved = localStorage.getItem("menu");
    if (!saved){
      async function fetchData() {
        const response = await axiosGet();
        setMenu(response.results);
        localStorage.setItem("menu", JSON.stringify(response.results));
        console.log({ response });
      }
      fetchData();
    } else {
      setMenu(JSON.parse(saved))
    }
  }, []);
  
  const [ state, dispatch ] = useGlobalState();

  //sorts that menu into just cupcakes
  let cupcakes = menu.filter( product => product.category===3 && product.published===true)

  //cart behavior
  let cart = state.cart

  const addToCart = ({id, starting_price, name}) => {
    const item = {name, id, unit_price:starting_price, message:null, special_instructions:null}
    dispatch([cart.push(item)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
    console.log(cart)
  }

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
