import { useState, useEffect } from "react";
import { axiosGet } from "../data";
import { Card, Button } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";
import CustomCookiePlatter from "../components/CustomCookiePlatter";

export default function Cookies() {
  const [state, dispatch] = useGlobalState();
  const [menu, setMenu] = useState([]);

  //I want this all in one place.
  useEffect(() => {
    let saved = localStorage.getItem("menu");
    if (!saved) {
      async function fetchData() {
        const response = await axiosGet();
        setMenu(response.results);
        //only save this if it isn't garbage.
        if (response.results) {
          localStorage.setItem("menu", JSON.stringify(response.results));
        } else {
          alert("We couldn't find anything!");
        }
        console.log({ response });
      }
      fetchData();
    } else {
      setMenu(JSON.parse(saved));
    }
  }, []);

  //cart behavior
  let cart = state.cart;

  const addToCart = ({ id, starting_price, name }) => {
    const item = {
      name,
      id,
      unit_price: starting_price,
      message: null,
      special_instructions: null,
    };
    dispatch([cart.push(item)]);
    localStorage.setItem("cart", JSON.stringify(state.cart));
    console.log(cart);
  };

  let cookies = menu.filter(
    (product) => product.category === 2 && product.published === true
  );
  return (
    <main className="product-page">
      <div className="superheader">Cookies</div>
      <h3 className="center">
        The best part of being an adult is you can just, like, buy cookies.  Literally whenever.
      </h3>
      <div className="products">
        {cookies.map((cookie) => (
          <Card key={cookie.name} border="dark" className="product-cards">
            <Card.Img src={cookie.photo} className="card-image" />
            <Card.Body>
              <Card.Title>{cookie.name}</Card.Title>
              <Card.Text>{cookie.description}</Card.Text>
              <Card.Footer className="dan-schneider">
                <Button
                  onClick={() => addToCart(cookie)}
                  className="custom-buttons card-buttons"
                >
                  Add to Cart
                </Button>
                <p style={{ textAlign: "right" }}>{cookie.starting_price}</p>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
      <CustomCookiePlatter />
    </main>
  );
}
