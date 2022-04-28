import { useEffect } from "react";
import { axiosGet } from "../data";
import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";
import Paypal from "../components/Paypal";

export default function CartViewer() {

  //cart behavior
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart
  
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosGet();
      setMenu(response.results);
      console.log({ response });
    }
    fetchData();
  }, []);

  console.log("cart contents: ", cart)

  const sum = cart.map(item => item.starting_price).reduce((prev, curr) => prev + curr, 0);

  const tax = (sum*.06).toFixed(2)

  const total = parseInt(sum) + parseInt(tax)

  function remove(e){
    console.log("to delete", e.target.id)
    dispatch(state.cart.splice(e.target.id, 1))
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }

  function addAnother(e){
    console.log(e.target.id)
    dispatch(state.cart.push(menu[e.target.id -1]))
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }

  function clearCart(){
    dispatch(state.cart = [])
    localStorage.clear();
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="superheader">Cart</div>
      <p>View the contents of your cart and checkout.</p>
      <div className="products">
        {cart.map((item, index) => (
          <Card key={item.name+index} id={index} border="dark" style={{ width: "18rem" }}>
              <Card.Title>{item.name}</Card.Title>
            <Card.Body>
              <Card.Text>
                {item.starting_price}
                <Button id={index} onClick={remove} variant="danger">Remove</Button>
                <Button id={item.id} onClick={addAnother} variant="secondary">Add Another</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Card key="total">
          <Card.Title>Total</Card.Title>
          <Card.Body>
            <Card.Text >
              <Row style={{ alignContent:"space-between"}}>
              <Col>
              Subtotal: ${sum}<br></br>
              Est. Tax: ${tax}<br></br>
              Total: ${total}
              </Col>
              <Col style={{ alignContent:"flex-end"}}>
              <Button className="custom-buttons">Checkout</Button>
              <Paypal total={total} clearCart={clearCart}/>
              <Button onClick={clearCart} className="custom-buttons">Empty Cart</Button>
              </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
    </main>
  );
}