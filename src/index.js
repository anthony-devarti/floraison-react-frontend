import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "./routes/cookies";
import Cakes from "./routes/cakes";
import Cupcakes from "./routes/cupcakes";
import CartViewer from "./routes/CartViewer"
import { GlobalProvider } from "./components/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/home";
import Profile from "./routes/profile";

//https://reactrouter.com/docs/en/v6/getting-started/tutorial
//used this to get the default routes set up.
ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="cakes" element={<Cakes />} />
          <Route path="cupcakes" element={<Cupcakes />} />
          <Route path="cart" element={<CartViewer />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </GlobalProvider>,
  document.getElementById('root')
);
