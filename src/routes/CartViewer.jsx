import { useEffect } from "react";
import { axiosGet } from "../data";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";

export default function CartViewer() {

  //cart behavior
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart
  const addToCart = (product) => {
    dispatch([cart.push(product)])
  }

  const sum = cart.map(item => item.starting_price).reduce((prev, curr) => prev + curr, 0);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Cart</h2>
      <p>View the contents of your cart and checkout.</p>
      <div className="products">
        {cart.map((item) => (
          <Card key={item.name} border="dark" style={{ width: "18rem" }}>
              <Card.Title>{item.name}</Card.Title>
            <Card.Body>
              <Card.Text>{item.starting_price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Card key="total">
          <Card.Title>Total</Card.Title>
          <Card.Body>
            <Card.Text>
              Subtotal: ${sum}<br></br>
              Est. Tax: ${sum*.06}<br></br>
              Total: ${sum+sum*.06}
            </Card.Text>
          </Card.Body>
        </Card>
    </main>
  );
}