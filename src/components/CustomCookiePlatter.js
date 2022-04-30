import { buildQueries } from "@testing-library/react";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { axiosGetCookies } from "../data";
import { useState, useEffect } from "react";

export default function CustomCookiePlatter(cookieItems) {
  const cookieImage = process.env.PUBLIC_URL + "/images/cookieplatter.jpeg";
  const overheadChocolate = process.env.PUBLIC_URL + "/public/images/chocolatechipoverhead.png";

  //this needs to make another api call.
  const [cookieMenu, setCookieMenu] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const response = await axiosGetCookies()
      setCookieMenu(response.results)
    }
    fetchData();
  }, []);

  console.log("cookie menu: ", cookieMenu)
  let cookies = cookieMenu

  //setups to build the cookie platters
  let size = 0;
  let tray = [];
  function build(e) {
    size = e.target.id;
    console.log(`Building a ${size} cookie platter.`);
    //launch a modal that contains all cookie options with a + and - button
    //adding a cookie should check the array length before adding the cookie type to the array.
    //if platter.length <= size
    //add the cookie
    //else
    //show customer that another cookie cannot be added.
  }
  //handles the addition of cookies to the tray.  includes logic that requires the user to select a tray size first, then stops them if they try to add too many cookies.  These are all alerts right now, but they should probably show up as animated modals in the future since alerts are ugly af
  function addCookie(e) {
    console.log(e.target.id);
    let type = e.target.id;
    if (!size) {
      alert("Choose a tray size, first.");
    } else if (tray.length < size) {
      tray.push(type);
    } else {
      alert("too many cookies");
    }
    console.log(tray);
  }

  function removeCookie(e) {
    if (tray.includes(e.target.id)) {
      let removed = tray.indexOf(e.target.id);
      tray.splice(removed, 1);
      console.log(tray);
    }
  }

  return (
    <>
      <div className="superheader">Build Your Own</div>
      <p>
        Build your own cookie platter. Just pick a size, 12, 24, or 36, and then
        add individual cookies until you have reached the size of your platter.
        Some cookies can increase the starting price of the platter.
      </p>
      <div className="products">
        <Card key="12" border="dark" className="product-cards">
          <Card.Img variant="top" src={cookieImage} className="card-image" />
          <Card.Body>
            <Card.Title>12-Piece Cookie Platter</Card.Title>
            <Card.Text>
              Starts at 13.99 Choose 12 cookies to build your own party platter!
            </Card.Text>
            <Button
              onClick={build}
              id="12"
              className="custom-buttons"
              variant="primary"
            >
              Start Building
            </Button>
          </Card.Body>
        </Card>
        <Card key="24" border="dark" className="product-cards">
          <Card.Img variant="top" src={cookieImage} className="card-image" />
          <Card.Body>
            <Card.Title>24-Piece Cookie Platter</Card.Title>
            <Card.Text>
              Starts at 19.99 Choose 24 cookies to build your own party platter!
            </Card.Text>
            <Button
              onClick={build}
              id="24"
              className="custom-buttons"
              variant="primary"
            >
              Start Building
            </Button>
          </Card.Body>
        </Card>
        <Card key="36" border="dark" className="product-cards">
          <Card.Img variant="top" src={cookieImage} className="card-image" />
          <Card.Body>
            <Card.Title>36-Piece Cookie Platter</Card.Title>
            <Card.Text>
              Starts at 26.99 Choose 36 cookies to build your own party platter!
            </Card.Text>
            <Button
              onClick={build}
              id="36"
              className="custom-buttons"
              variant="primary"
            >
              Start Building
            </Button>
          </Card.Body>
        </Card>
      </div>
      
      <div className="vertical-spacer">

      </div>

      <div className="products" >
        {cookies.map((cookie) => (
          <Card key={cookie.name} className="cookie-clicker">
            <Card.Img className="cookie-clicker-image" src={cookie.image} />
            <div>{cookie.name}</div>
            <div>{cookie.description}</div>
            <div>Additional ${cookie.modifier}</div>
            <Button
              id={cookie.name}
              className="circle-button"
              style={{ right: "90px" }}
              onClick={removeCookie}
            >
              -
            </Button>
            <Button
              id={cookie.name}
              className="circle-button"
              style={{ right: "40px" }}
              onClick={addCookie}
            >
              +
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

{/* <Card key={cake.name} border="dark" className="product-cards">
  <Card.Img className="card-image" src={cake.photo} />
  <Card.Body>
    <Card.Title>{cake.name}</Card.Title>
    <Card.Text>{cake.description}</Card.Text>
    <Card.Footer className="dan-schneider">
      <Button
        onClick={() => addToCart(cake)}
        className="custom-buttons card-buttons"
      >
        Add to Cart
      </Button>
      <p style={{ textAlign: "right" }}>${cake.starting_price}</p>
    </Card.Footer>
  </Card.Body>
</Card>; */}
