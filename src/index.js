import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "./routes/cookies";
import Cakes from "./routes/cakes";
import Cupcakes from "./routes/cupcakes";

const root = ReactDOM.createRoot(document.getElementById("root"));
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
//used this to get the default routes set up.
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cookies" element={<Cookies />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="cupcakes" element={<Cupcakes />} />
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select a cupcake</p>
            </main>
          }
        />
        <Route path=":cupcakeID" element={<Cupcakes />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
