import React from "react";
import { Card, Button } from "react-bootstrap";
import { axiosGetCookies } from "../data";
import { useState, useEffect } from "react";

export default function CustomCookiePlatter(cookieItems) {
  const cookieImage = process.env.PUBLIC_URL + "/images/cookieplatter.jpeg";
  const overheadChocolate =
    process.env.PUBLIC_URL + "/public/images/chocolatechipoverhead.png";

  //this needs to make another api call.
  const [cookieMenu, setCookieMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosGetCookies();
      setCookieMenu(response.results);
    }
    fetchData();
  }, []);

  console.log("cookie menu: ", cookieMenu);
  let cookies = cookieMenu;

  //setups to build the cookie platters
  const [size, setSize] = useState(0);
  const [tray, setTray] = useState([]);
  const [price, setPrice] = useState(0);

  function build(e) {
    console.log(e.target.id);
    switch (true) {
      case e.target.id == 12:
        setPrice(13.99);
        setSize(12);
        break;
      case e.target.id == 24:
        setPrice(19.99);
        setSize(24);
        break;
      case e.target.id == 36:
        setPrice(26.99);
        setSize(36);
        break;
      case e.target.id == 48:
        setPrice(31.99);
        setSize(48);
        break;
      default:
        alert("Something went wrong.  Refresh the window and try again.");
        break;
    }
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
    console.log(cookies)
    //trying to get the mod value of the cookie added, then add that value to the price
    // let mod = cookies.filter(cookie => cookie.name == type).mod
    //console.log(mod)
    if (!size) {
      //prompt user to choose a tray size in a modal, instead
      alert("Choose a tray size, first.");
    } else if (tray.length < size) {
      let newTray = tray
      newTray.push(type)
      setTray([...newTray]);
      //this is not working as expected
      // setPrice(price + mod)
    } else {
      //cute message in a modal suggesting they raise the tray size
      alert("too many cookies");
    }
    console.log(tray);
  }

  function removeCookie(e) {
    if (tray.includes(e.target.id)) {
      let removed = tray.indexOf(e.target.id);
      let newTray = tray.splice(removed, 1);
      setTray([...newTray])
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

      <div className="vertical-spacer"></div>

      <div className="products">
        {cookies.map((cookie) => (
          <Card key={cookie.name} className="cookie-clicker">
            <Card.Img className="cookie-clicker-image" src={cookie.image} />
            <div>{cookie.name}</div>
            <div>{cookie.description}</div>
            <div>Additional ${cookie.modifier}</div>
            <Button
              id={cookie.name}
              data={cookie.mod}
              className="circle-button"
              style={{ right: "90px" }}
              onClick={removeCookie}
            >
              -
            </Button>
            <Button
              id={cookie.name}
              data={cookie.mod}
              className="circle-button"
              style={{ right: "40px" }}
              onClick={addCookie}
            >
              +
            </Button>
          </Card>
        ))}
      </div>
      <div className="floating-total">
        <div>
          {tray.length}/{size}
        </div>
        <div>${price}</div>
      </div>
    </>
  );
}
