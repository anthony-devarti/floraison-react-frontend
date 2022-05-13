import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import {
  Button,
  Navbar,
  Offcanvas,
  Nav,
  Container,
  Modal,
} from "react-bootstrap";
import { useGlobalState } from "./components/GlobalState";
import "./App.css";
import Login from "./components/Login";

function App() {
  //Places to handle button behavior
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  function LoginHandler() {
    //this is grabbing this info in a weird way right now.
    // it's grabbing all of the info and showing the current

    if (show == true) {
      return (
        <Modal className="floraison-modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login handleClose={handleClose}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  function UserButton() {
    if (state.currentUser) {
      return <Button className="custom-buttons" onClick={() => navigate('/profile')}>Profile</Button>;
    } else {
      return (
        <Button className="custom-buttons" onClick={handleShow}>
          Login
        </Button>
      );
    }
  }

  //handles the cart behavior
  const [state, dispatch] = useGlobalState();
  let cart = state.cart;

  //put the logo stuff here
  const logo = process.env.PUBLIC_URL + "/logo.svg";


  return (
    <div className="App">
      <div className="snapper">
        <Navbar sticky="top" className="navigator" expand={false}>
          <Container fluid>
            <Navbar.Brand>
              <Link to="/home">
                <h1>LA FLORAISON</h1>
              </Link>
            </Navbar.Brand>
            <div className="logo">
              <img src={logo} alt="icon" style={{width:'160px'}}/>
            </div>
            <div className="right-nav">
              <div className="right-buttons">
              <Link to="/cart">
                <Button className="custom-buttons">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      fill="white"
                      d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                    />
                  </svg>{" "}
                  ( {cart.length} )
                </Button>
              </Link>
              <UserButton />
              </div>

              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header className="offcanvas" closeButton>
                  <Offcanvas.Title
                    className="octitle"
                    id="offcanvasNavbarLabel"
                  >
                    Where to?
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 hamburger">
                    <Link to="/home">Home</Link>
                    <Link to="/cookies">Cookies</Link>
                    <Link to="/cakes">Cakes</Link>
                    <Link to="/cupcakes">Cupcakes</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/profile">Profile</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
        <LoginHandler />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
