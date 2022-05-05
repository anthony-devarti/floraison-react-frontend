import React from "react"
import { useGlobalState } from "../components/GlobalState";
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router";
import { axiosGetOrdersByUserId } from "../data";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Profile = () => {
  let navigate = useNavigate()
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart

  const id = state.currentUser.user_id
  let firstName = state.currentUser.username

  const [orders, setOrders] = useState([])
  useEffect( () => {
    async function fetchData() {
      const response = await axiosGetOrdersByUserId(id)
      setOrders(response.results)
    }
    fetchData();
  }, []);
  
  function logoutHandler() {
    localStorage.removeItem("user");
    dispatch[state.currentUser=null]
    navigate("/home")
  }

  function runItBack(set){
    let items = []
    set.map((line, index) => 
      items.push(line.item)
      )
    dispatch([cart.push(...items)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }

  //this is not a final function in production, it is here for testing
  function stateChecker() {
    console.log("current user: ", state.currentUser)
    console.log("orders: ", orders)
    // console.log("first order: ",orders[0].Order.id, orders[0].Order.total, orders[0].item.name, orders[0].unit_price)
    // console.log("current: ", current)
  }

  return (
    <>
    <div>
      <h1>Hey there, {firstName}</h1>
      <h2>Welcome back!  What are we looking to do today?</h2>

      <Button onClick={() => stateChecker()}>View State</Button>
      <Button className="custom-buttons" onClick={logoutHandler}>Log Out</Button>
    </div>

    <div className="products">
              {orders.map((order, index) => (
               <Card key={order.id} border="dark" className="product-cards">
               <Card.Body>
                 <Card.Title>Order Number: {order.id} Total: ${order.total}</Card.Title>
                 <Card.Text>
                 </Card.Text>
                   <ul>
                   {order.order_item_set.map((line, index) => (
                     <li key={line.item.name + index}>{line.item.name} {line.unit_price}</li>
                   ))}
                   </ul>
                 <Card.Footer className="dan-schneider">
                   <Button className="custom-buttons card-buttons"
                   onClick={()=>runItBack(order.order_item_set)}
                   >
                     Run it back
                   </Button>
                 </Card.Footer>
               </Card.Body>
             </Card>
              ))}
        

          </div>
    </>
  )
}

export default Profile