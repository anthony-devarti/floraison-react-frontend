import axios from "axios";
import REACT_APP_BASE from "./.env"

//may need to make this into an env variable
const base = process.env.REACT_APP_BASE

export async function axiosGet() {
  return axios
    .get(base + 'items/')
    .then((response) => response.data);
}

export async function axiosGetOrdersByUserId(id) {
  return axios
    .get(base + `?id=&user=${id}`)
    .then((response) => response.data);
}


export async function axiosGetCookies() {
  return axios
    .get(base + "cookie_type/")
    .then((response) => response.data)
}

export async function axiosPostOrder(itemObject) {
  //the item object needs to include the order number, item(this is currently expecting a foreign key, so something needs to be worked on here), unit price, message, and special instructions

  // order = models.ForeignKey(order, on_delete=models.CASCADE)
  // item = models.ForeignKey(item, on_delete=models.CASCADE)
  // unit_price = models.FloatField()
  // message = models.CharField(max_length=50, null=True)
  // special_instructions = models.CharField(max_length=200, null=True)
  axios.post(base + "order_item/"[itemObject])
}
