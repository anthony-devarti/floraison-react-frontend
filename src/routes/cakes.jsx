import { useEffect } from "react";
import { axiosGet, getMenu, sendGetRequest } from "../data";
import axios from "axios";
import { useState } from "react";

export default function Cakes() {
  // let menu = sendGetRequest().then(response => response.data)
  let menu = axiosGet()
  console.log(menu)
  
  // let fullMenu = getMenu();

  // console.log (fullMenu)
  // let cakeMenu = menu.filter(item => item.category !=1)
  // console.log(cakeMenu)
 


  // {cakes.map(([cakes, cake]) => (
  //   <>
  //     <h1>Name: {cake.name}</h1>
  //     <h2>Description: {cake.description}</h2>
  //     <h3>Price: {cake.price}</h3>
  //   </>
  // ))}

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Cakes</h2>
      <p>This is the cakes page.</p>
      
    </main>
  );
}
