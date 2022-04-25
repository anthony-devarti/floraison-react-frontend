import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>La Floraison</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/cookies">Cookies</Link> |{" "}
        <Link to="/cakes">Cakes</Link> |{" "}
        <Link to="/cupcakes">Cupcakes</Link> |{" "}
        <Button onClick={console.log("This isn't logging")}>Cart</Button>
      </nav>
        <Outlet />
    </div>
  );
}

export default App;
