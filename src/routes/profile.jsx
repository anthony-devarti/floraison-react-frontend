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

  const id = state.currentUser.user_id
  let firstName = state.currentUser.username

  //hit the orders and build them into a usable object instead of the nested mess they are

  //I need to loop through these order items, then combine all order items with the same order number into a single order
  //then I need to format that order with more than one item into an object with an array of items as the value of the items key
  //then I need to map through the orders and create a card for each (single card per order, unlike what's happening now)
  //within the map, there needs to be a nested map method to map through the array of items in a single order and make a li for each of them.
  const [orders, setOrders] = useState([])
  useEffect( () => {
    async function fetchData() {
      const response = await axiosGetOrdersByUserId(id)
      setOrders(response.results)
    }
    fetchData();
  }, []);


  // const [custOrders, setCustOrders] = useState({})
  // // let orderItems = response.results
  // for (let item in orders){
  //   let orderNumber = item.id
  //   let dueDate = item.due_date
  //   let total = item.total

  //   // let items = orders.filter(item => item.order==orderNumber)
  //   console.log()
  //   let customerOrder = {
  //     "id":orderNumber, 
  //     "due":dueDate,
  //     "total": total,
  //     "items": []
  //   }
  //   setCustOrders(customerOrder)
  // }

  // let order54 = orders.filter(order => order.Order.id == 84)
  // for (let order in orders){
  //   let id = order.Order.id
  //   let total = order.Order.total
  //   let items = []

  //   let custOrder = {
  //     "Order number": id,
  //     "Total": total
  //     "Items": items
  //   }
  // }


  

  function logoutHandler() {
    localStorage.removeItem("user");
    navigate("/home")
  }

  //the goal here is to filter out all of the duplicates by the Order.ids that match

  // const unique = [...new Map(orders.map((Order, id) => [Order[id], Order])).values()]

  // const ids = orders.map(order => order.id)
  // const filtered = orders.filter(({id}, index) => !ids.includes(id, index + 1))

  //this is just returning one order.  I'm not sure what's going on here.
  // const filtered = Object.values(orders.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}))

  // let filtered=[orders[0]]
  // for (let i=1; i<orders.length; i++){
  //   if (!filtered[i-1].Order.id.includes(orders[i].Order.id)){
  //     filtered.push(orders[i])
  //   } else continue
  // }

  // let current = []
  // let currentOrders = []
  // for (let i=0; i<orders.length; i++){
  //   current.push(orders[i])
  //   if (orders[i].Order.id)
  // }


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
                   <Button className="custom-buttons card-buttons">
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