import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { Button, Navbar, Offcanvas, Nav, Container } from "react-bootstrap";
import Tiles from "./components/Tiles";
import "./App.css";

function App() {
  

  //Places to handle button behavior
  function cartHandler() {
    console.log("do cart stuff here");
  }

  function loginHandler() {
    console.log("do login stuff here");
  }

  return (
    <div className="App">
      <Navbar className="navigator" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <h1>LA FLORAISON</h1>
            </Link>
          </Navbar.Brand>
          <div>Logo</div>
          <div className="action-buttons">
            <Button
              className="custom-buttons"
              style={{ width: "3rem" }}
              onClick={cartHandler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  fill="white"
                  d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                />
              </svg>
            </Button>
            <Button className="custom-buttons" onClick={loginHandler}>
              Login
            </Button>
          </div>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header className="offcanvas" closeButton>
              <Offcanvas.Title className="octitle" id="offcanvasNavbarLabel">
                Where to?
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 hamburger">
                <Link to={{
                  pathname: "/",
                  state: {
                    fromHome: true
                  }
                }}
                  >Home</Link>
                <Link to="/cookies" >Cookies</Link>
                <Link to="/cakes">Cakes</Link>
                <Link to="/cupcakes">Cupcakes</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Tiles />
      <Outlet />
    </div>
  );
}

export default App;
