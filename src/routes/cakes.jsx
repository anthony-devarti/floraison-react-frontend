import { useEffect } from "react";
import { axiosGet } from "../data";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useGlobalState } from "../components/GlobalState";

export default function Cakes() {
  const [menu, setMenu] = useState([]);


  //I hate that this is repeated everywhere.
  useEffect(() => {
    let saved = localStorage.getItem("menu");
    if (!saved){
      async function fetchData() {
        const response = await axiosGet();
        setMenu(response.results);
        localStorage.setItem("menu", JSON.stringify(response.results));
        console.log({ response });
      }
      fetchData();
    } else {
      setMenu(JSON.parse(saved))
    }
  }, []);

  let cakes = menu.filter((product) => product.category === 1);

  //cart behavior
  const [state, dispatch] = useGlobalState();
  let cart = state.cart;

  ///Can likely be consolidated between all 3 routes.  It's the same everywhere.
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

  return (
    <main className="product-page">
      <div className="superheader">Cakes</div>
      <h3 className="center">
        It's not a party if there's no cake.  I don't make the rules.
      </h3>
      <div className="products">
        {cakes.map((cake) => (
          <Card key={cake.name} border="dark" className="product-cards">
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
                <p style={{ position: "absolute", right: "10px" }}>
                  ${cake.starting_price}
                </p>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </main>
  );
}
