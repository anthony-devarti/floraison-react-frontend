import Cupcakes from "./routes/cupcakes";
import axios from 'axios'

let cupcakeMenu = [
    {
      name: "Vanilla Cupcake",
      number: 1995,
      amount: "$3",
      due: "12/05/1995",
    },
    {
      name: "Chocolate Cupcake",
      number: 2000,
      amount: "$8",
      due: "10/31/2000",
    },
    {
      name: "Mascarpone Cupcake",
      number: 2003,
      amount: "$9",
      due: "07/22/2003",
    },
    {
      name: "Strawberry Rhubarb Cupcake",
      number: 1997,
      amount: "$4",
      due: "09/01/1997",
    },
    {
      name: "Coffee Cake Cupcake",
      number: 1998,
      amount: "$4",
      due: "01/27/1998",
    },
  ];
  
  export function getCupcakeMenu() {
    return cupcakeMenu;
  }

  export function getCupcake(number) {
      return Cupcakes.find(
          (cupcake) => cupcake.number === number
      )
  }

 //Setting up the fetch to grab all of the menu items from here

  export async function getMenu() {
    try {
      const response = await axios.get('https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us42.gitpod.io/floraison/items/');
    } catch (error){
      console.log(error)
    }
  }
 
//
