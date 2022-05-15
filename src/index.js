import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Cookies from "./routes/cookies";
import Cakes from "./routes/cakes";
import Cupcakes from "./routes/cupcakes";
import CartViewer from "./routes/CartViewer"
import { GlobalProvider } from "./components/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/home";
import Profile from "./routes/profile";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
//used this to get the default routes set up.
root.render(
  <GlobalProvider>
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </BrowserRouter>
  </GlobalProvider>
);
