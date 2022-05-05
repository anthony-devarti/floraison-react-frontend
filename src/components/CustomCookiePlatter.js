import React from "react";
import { Card, Button } from "react-bootstrap";
import { axiosGetCookies } from "../data";
import { useState, useEffect } from "react";
import { useGlobalState } from "./GlobalState";

export default function CustomCookiePlatter(cookieItems) {
  const cookieImage = process.env.PUBLIC_URL + "/images/cookieplatter.jpeg";

  //this needs to make another api call.
  const [cookieMenu, setCookieMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosGetCookies();
      setCookieMenu(response.results);
    }
    fetchData();
  }, []);

  let cookies = cookieMenu;

  //setups to build the cookie platters

  //sets the current size of the platters
  const [size, setSize] = useState(0);
  //hands the contents of the tray around
  const [tray, setTray] = useState([]);
  //keeps track of the price of the current tray
  const [price, setPrice] = useState(0);
  //keeps track of the current number of cookies in the tray
  const [current, setCurrent] = useState(0);

  //these handle conditional rendering of elements that will only appear under certain conditions.
  //https://reactjs.org/docs/conditional-rendering.html
  //shows or hides the cookie tracker
  const [counterVisible, setCounterVisible] = useState(false);
  //shows the button to add the current tray to the cart
  const [addVisible, setAddVisible] = useState(false);


  //this is a component that is being conditionally rendered. It's probably not worth it to make it it's own file
  function FloatingTotal(){
    if (counterVisible===true){
      return(
        <div className="floating-total">
        <div>
          {current}/{size}
        </div>
        <div>${price}</div>
      </div>
      )
    } else {
      return null
    }
  }
  //cart behavior
  const [ state, dispatch ] = useGlobalState();
  let cart = state.cart
  function handleAdd(size, price, tray){
    let product = {
      "name":size + "cookie platter",
      "contents":tray,
      "starting_price": price
    }
    dispatch([cart.push(product)])
    localStorage.setItem("cart", JSON.stringify(state.cart))
    setTray([])
    setAddVisible(false)
    setCounterVisible(false)
    //maybe a toast or something that says that the item has been added?
    //right now everything just sort of disappears.
  }

  //the conditionally rendered add to cart button that should display when the tray is full and ready to be added to the cart as an item.
  function AddButton(){
    if (addVisible===true){
      return(
        <Button className="custom-buttons cond-checkout" onClick={() => handleAdd(size, price, tray)}>Add to Cart</Button> 
    )} else {
      return null
    }
    }

    /// end of cart behavior ///

  function build(e) {
    if (e.target.id < size){
      alert("you have too many cookies to go down to a tray size this small")
    } else {
    setAddVisible(false)
    switch (true) {
      //these are working with == and not ===.  probably e.target.id isn't the number, but a string of the number or something like that.
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
    }}
    setCounterVisible(true)
    //launch a modal that contains all cookie options with a + and - button
    //adding a cookie should check the array length before adding the cookie type to the array.
    //if platter.length <= size
    //add the cookie
    //else
    //show customer that another cookie cannot be added.
  }
  //handles the addition of cookies to the tray.  includes logic that requires the user to select a tray size first, then stops them if they try to add too many cookies.  These are all alerts right now, but they should probably show up as animated modals in the future since alerts are ugly af
  function addCookie(e, type, mod) {
    if (!size) {
      //prompt user to choose a tray size in a modal, instead
//      Make sure to make e.target.id equal to the tray size no matter where it comes from or you'll have to rewrite the build function
      alert("Choose a tray size, first.");
    } else if (tray.length < size) {
      let newTray = tray;
      newTray.push(type);
      setTray([...newTray]);
      setPrice(price + mod);
      setCurrent(tray.length);
      //weird because of the render
      if(current===size-1){
        setAddVisible(true)
      }
    } else {
      //cute message in a modal suggesting they raise the tray size
      alert("too many cookies");
    }
    // console.log(tray);
  }

  function removeCookie(e, type, mod) {
    if (tray.includes(type)) {
      let removed = "";
      removed = tray.indexOf(type);
      //splice is not working as expected.  Testing to determine behavior:
      // add a cookie and delete it - works
      // add 2 of the same cookie and delete 1 - works
      // add 2 of cookie a, 1 of cookie b, then delete one of cookie a - works

      // add 2 of cookie a, 1 of cookie b, then delete 2 of cookie a - fails on the second del by hitting the else statement of this function

      // add 2 of cookie a, 1 of cookie b, then delete one of cookie b - works

      // add 2 of cookie a, 1 of cookie b, then delete one of cookie b, then del 1 of cookie a - hits the else statement on second delete

      //    issues with the second concurrent delete?
      // add 3 of a cookie and delete 2 - second del seems to empty the tray
      // add 3 of cookie a, delete 2 of cookie a, add 1 of cookie b - the tray now has the expected cookies.

      //    does it have something to do with when the array length goes to 1 - Nope, the same issue is present when the array is longer.
      // add 4 of a cookie and delete 2 - second del seems to empty the tray
      //    I think there's something wrong with targeting the specific index of a cookie type.  Maybe the array is being mutated in some way?
      //    it was.  I was setting the tray to only the items that were deleted, rather than the items that were not.  Kinda the opposite of what I wanted
      let newTray = tray;
      newTray.splice(removed, 1);
      setTray([...newTray]);
      setPrice(price - mod);
      setCurrent(tray.length);
    } else {
      alert("that cookie's not in there.");
    }
  }
  //hard-coding these for now.  Maybe want to add in a method to loop through them to reduce repeated code.
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
              onClick={(e) => removeCookie(e, cookie.name, cookie.modifier)}
            >
              -
            </Button>
            <Button
              id={cookie.name}
              data={cookie.mod}
              className="circle-button"
              style={{ right: "40px" }}
              onClick={(e) => addCookie(e, cookie.name, cookie.modifier)}
            >
              +
            </Button>
          </Card>
        ))}
      </div>
      <FloatingTotal />
      <AddButton />
    </>
  );
}
