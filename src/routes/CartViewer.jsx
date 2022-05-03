import { useEffect } from "react";
import { axiosGet, axiosPlaceOrder, axiosPostOrder } from "../data";
import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";
import Paypal from "../components/Paypal";
import axios from "axios";

export default function CartViewer() {
  //cart behavior
  const [state, dispatch] = useGlobalState();
  let cart = state.cart;

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosGet();
      setMenu(response.results);
      console.log({ response });
    }
    fetchData();
  }, []);

  console.log("cart contents: ", cart);

  //handling cart total behavior estimating tax etc.
  const sum = cart
    .map((item) => item.unit_price)
    .reduce((prev, curr) => prev + curr, 0);

  const tax = (parseFloat(sum) * 0.06).toFixed(2);

  const total = parseFloat(sum) + parseFloat(tax);

  function remove(e) {
    console.log("to delete", e.target.id);
    dispatch(state.cart.splice(e.target.id, 1));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  function addAnother(e) {
    console.log(e.target.id);
    dispatch(state.cart.push(menu[e.target.id - 1]));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  function clearCart() {
    dispatch((state.cart = []));
    localStorage.clear();
  }

  function confirmationModal(order){
    console.log("order details: ", order)
  }

  //this should just send the cart to the order items endpoint
  function placeOrder(total) {
    const orderObject = {
      "total": total,
      "paid": true,
      "user": 1,
      "order_items": cart,
    };
    axios
      .post(
        "https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us43.gitpod.io/floraison/order_item/create_orders/",
        orderObject
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      clearCart();
      // need to get the order details:
      // order Number
      // order items
      // order total

      //generate a modal that includes all of the above information as well as:
      // static thank you message
      // close button
      confirmationModal(orderObject)
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="superheader">Cart</div>
      <p>View the contents of your cart and checkout.</p>
      <div className="products">
        {cart.map((item, index) => (
          <Card
            key={item.name + index}
            id={index}
            border="dark"
            className="product-cards"
            style={{ height: "auto" }}
          >
            <Card.Title>{item.name}</Card.Title>
            <Card.Body>
              <div style={{ position: "absolute", top: "4px", right: "4px" }}>
                ${item.starting_price}
              </div>
              <div
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "r",
                }}
              >
                <Button
                  id={item.id}
                  style={{ margin: "4px" }}
                  onClick={addAnother}
                  variant="secondary"
                >
                  Add Another
                </Button>
                <Button
                  id={index}
                  style={{ margin: "4px" }}
                  onClick={remove}
                  variant="danger"
                >
                  Remove
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Card key="total">
        <Card.Title>Total</Card.Title>
        <Card.Body>
          <Row style={{ alignContent: "space-between" }}>
            <Col>
              Subtotal: ${sum}
              <br></br>
              Est. Tax: ${tax}
              <br></br>
              Total: ${total}
            </Col>
            <Col style={{ alignContent: "flex-end" }}>
              {/* <Paypal total={total} clearCart={clearCart}/> */}
              <Button onClick={clearCart} className="custom-buttons">
                Empty Cart
              </Button>
              <Button
                onClick={() => placeOrder(total)}
                className="custom-buttons"
              >
                Post tester
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </main>
  );
}
