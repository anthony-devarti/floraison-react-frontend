import { useEffect } from "react";
import { axiosGet } from "../data";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";

export default function Cakes() {
  const [cakeItems, setCakeItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axiosGet();
      setCakeItems(response.results);
      // ...
      console.log({ response });
    }
    fetchData();
  }, []);

  let cakes = cakeItems.filter((product) => product.category === 1);

  //cart behavior
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart

  ///Can likely be consolidated between all 3 routes.  It's the same everywhere.
  const addToCart = ({id, starting_price, name}) => {
    const item = {name, id, unit_price:starting_price, message:null, special_instructions:null}
    dispatch([cart.push(item)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
    console.log(cart)
  }

  return (
    <main className="product-page">
      <div className="superheader">Cakes</div>
      <p>Whether it's for a party, a special event, or even just because you feel like having a cake for yourself, you're sure to find something perfect, here!</p>
      <div className="products">
        {cakes.map((cake) => (
          <Card key={cake.name} border="dark" className="product-cards">
            <Card.Img className="card-image" src={cake.photo} />
            <Card.Body>
              <Card.Title>{cake.name}</Card.Title>
              <Card.Text>{cake.description}</Card.Text>
              <Card.Footer className="dan-schneider">
                <Button onClick={()=> addToCart(cake)} className="custom-buttons card-buttons">
                  Add to Cart
                </Button>
                <p style={{ textAlign: "right"}}>${cake.starting_price}</p>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </main>
  );
}
