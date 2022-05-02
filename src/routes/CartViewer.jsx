import { useEffect } from "react";
import { axiosGet, axiosPlaceOrder, axiosPostOrder } from "../data";
import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";
import Paypal from "../components/Paypal";
import axios from "axios";

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

  //I'm not sure how this would work, so I'm going to just push the whole cart into the orders first
  // function postOrder(){
  //   console.log("Posting an order")
  //    //the item object needs to include the order number, item(this is currently expecting a foreign key, so something needs to be worked on here), unit price, message, and special instructions
  
  //   // order = models.ForeignKey(order, on_delete=models.CASCADE)
  //   // item = models.ForeignKey(item, on_delete=models.CASCADE)
  //   // unit_price = models.FloatField()
  //   // message = models.CharField(max_length=50, null=True)
  //   // special_instructions = models.CharField(max_length=200, null=True)
    
  //   //generate an order number.  this needs to increment from the last order number?
  //   const orderNumber = 1

  //   //iterate through the cart in state.  
  //   //for each item in the cart, make an item object, and post it to the item orders table
  //   const itemObject = {

  //   }

  //   axiosPostOrder(itemObject)
  // }


  function placeOrder(){
    
    //this order structure is known good and working in postman
    const orderObject = 

    {
      "total": 65,
      "paid": true,
      "completed": false,
      "due_date": null,
      "user": 1
  }
    
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="superheader">Cart</div>
      <p>View the contents of your cart and checkout.</p>
      <div className="products">
        {cart.map((item, index) => (
          <Card key={item.name+index} id={index} border="dark" className="product-cards" style={{height:"auto"}}>
              <Card.Title>{item.name}</Card.Title>
            <Card.Body>
                <div style={{position:"absolute", top:"4px", right:"4px"}}>${item.starting_price}</div>
                <div style={{alignContent:"center", alignItems:"center", justifyContent:"r"}}>
                <Button id={item.id} style={{margin:"4px"}} onClick={addAnother} variant="secondary">Add Another</Button>
                <Button id={index} style={{margin:"4px"}} onClick={remove} variant="danger">Remove</Button>
                </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Card key="total">
          <Card.Title>Total</Card.Title>
          <Card.Body>
              <Row style={{ alignContent:"space-between"}}>
              <Col>
              Subtotal: ${sum}<br></br>
              Est. Tax: ${tax}<br></br>
              Total: ${total}
              </Col>
              <Col style={{ alignContent:"flex-end"}}>
              {/* <Paypal total={total} clearCart={clearCart}/> */}
              <Button onClick={clearCart} className="custom-buttons">Empty Cart</Button>
              <Button onClick={placeOrder} className="custom-buttons">Post tester</Button>
              </Col>
              </Row>
          </Card.Body>
        </Card>
    </main>
  );
}