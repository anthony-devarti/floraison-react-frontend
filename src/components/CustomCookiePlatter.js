import { buildQueries } from "@testing-library/react";
import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CustomCookiePlatter() {

    function build(e){
        console.log(`Building a ${e.target.id} cookie platter.`)
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
        <Card.Img
          variant="top"
          src="/public/images/cookieplatter.jpeg"
          className="card-image"
        />
        <Card.Body>
          <Card.Title>12-Piece Cookie Platter</Card.Title>
          <Card.Text>
            Starts at 13.99 Choose 12 cookies to build your own party platter!
          </Card.Text>
          <Button onClick={build} id="12" className="custom-buttons" variant="primary">
            Start Building
          </Button>
        </Card.Body>
      </Card>
      <Card key="24" border="dark" className="product-cards">
        <Card.Img
          variant="top"
          src="/public/images/cookie platter.jpeg"
          className="card-image"
        />
        <Card.Body>
          <Card.Title>24-Piece Cookie Platter</Card.Title>
          <Card.Text>
            Starts at 19.99 Choose 24 cookies to build your own party platter!
          </Card.Text>
          <Button onClick={build} id="24" className="custom-buttons" variant="primary">
            Start Building
          </Button>
        </Card.Body>
      </Card>
      <Card key="36" border="dark" className="product-cards">
        <Card.Img
          variant="top"
          src="/public/images/cookie platter.jpeg"
          className="card-image"
        />
        <Card.Body>
          <Card.Title>36-Piece Cookie Platter</Card.Title>
          <Card.Text>
            Starts at 26.99 Choose 36 cookies to build your own party platter!
          </Card.Text>
          <Button onClick={build} id="36" className="custom-buttons" variant="primary">
            Start Building
          </Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}
