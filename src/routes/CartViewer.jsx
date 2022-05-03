import { useEffect } from "react";
import { axiosGet, axiosPlaceOrder, axiosPostOrder } from "../data";
import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";
import Paypal from "../components/Paypal";
import axios from "axios";
import { Modal } from "react-bootstrap";

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

  //removes this item from the cart
  function remove(e) {
    console.log("to delete", e.target.id);
    dispatch(state.cart.splice(e.target.id, 1));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  //adds another of the same item to the cart
  function addAnother(e) {
    console.log(e.target.id);
    dispatch(state.cart.push(menu[e.target.id - 1]));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  //the user option to clear the cart, also is called when the order is completed and the cart needs to be emptied
  const [oldCart, setOldCart] = useState([])
  const [oldTotal, setOldTotal] = useState(0)
  function clearCart() {
    setOldCart([...cart])
    setOldTotal(total)
    dispatch((state.cart = []));
    localStorage.clear();
  }


  //the modal that appears when an order is completed
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  function ConfirmationModal(){
    //this is grabbing this info in a weird way right now.
    // it's grabbing all of the info and showing the current 
    console.log("old cart: ", oldCart)
    console.log("old total:", oldTotal)

    if (show==true){
      return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for your purchase!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Order Number: {currentId}
          <ul>
        {oldCart.map((item, index) => (
          <li
            key={item.name + index}
            id={index}
            border="dark"
            className="product-cards"
            style={{ height: "auto" }}
          >
            {item.name}
            
              <div>
                ${item.unit_price}
              </div>
              
            
          </li>
        ))}
      </ul>
      Total: {oldTotal}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  }

  //this should just send the cart to the order items endpoint
  const [currentId, setCurrentId] = useState(0)
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
      //need to save response.data to a variable
      .then(function (response) {
        console.log(response);
        setCurrentId(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });


      // need to get the order details:
      // order Number 
      // order items :done
      // order total :done
      
      //generate a modal that includes all of the above information as well as:
      // static thank you message :done
      // close button :done
    clearCart();
    handleShow(true)
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
                ${item.unit_price}
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
        <Card.Title>Checkout</Card.Title>
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
      {/* I need to get the cart array into the confirmation modal, but I'm having trouble passing it in here. */}
      <ConfirmationModal total={total}/>
    </main>
  );
}
