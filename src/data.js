import Cupcakes from "./routes/cupcakes";
import axios from "axios";

let cupcakeMenu = [
  {
    name: "Vanilla Cupcake",
    description: 1995,
    price: "$3",
    due: "12/05/1995",
  },
  {
    name: "Chocolate Cupcake",
    description: 2000,
    price: "$8",
    due: "10/31/2000",
  },
  {
    name: "Mascarpone Cupcake",
    description: 2003,
    price: "$9",
    due: "07/22/2003",
  },
  {
    name: "Strawberry Rhubarb Cupcake",
    description: 1997,
    price: "$4",
    due: "09/01/1997",
  },
  {
    name: "Coffee Cake Cupcake",
    description: 1998,
    price: "$4",
    due: "01/27/1998",
  },
];

export function getCupcakeMenu() {
  return cupcakeMenu;
}

export function getCupcake(number) {
  return Cupcakes.find((cupcake) => cupcake.number === number);
}

//Setting up the fetch to grab all of the menu items from here
//  export const sendGetRequest = async () => {
//   try {
//       const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       return resp.data;
//   } catch (err) {
//       // Handle Error Here
//       console.error(err);
//   }
// };

let testServerAPI = 'https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us42.gitpod.io/floraison/items/'

export async function axiosGet() {
  return axios
    .get(testServerAPI)
    .then((response) => response.data);
}
//
