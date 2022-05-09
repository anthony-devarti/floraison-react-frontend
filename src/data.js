import axios from "axios";

let testServerAPI = 'https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us44.gitpod.io/floraison/items/'
const testServerAPICookies = "https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us44.gitpod.io/floraison/cookie_type/"
const addOrderAPI = "https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us44.gitpod.io/floraison/order_item/"



const instance = axios.create({
  baseURL: "https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us43.gitpod.io/"
})

export async function axiosGet() {
  return axios
    .get(testServerAPI)
    .then((response) => response.data);
}

export async function axiosGetOrdersByUserId(id) {
  return axios
    .get(`https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us44.gitpod.io/floraison/Orders/?id=&user=${id}`)
    .then((response) => response.data);
}


export async function axiosGetCookies() {
  return axios
    .get(testServerAPICookies)
    .then((response) => response.data)
}

export async function axiosPostOrder(itemObject) {
  //the item object needs to include the order number, item(this is currently expecting a foreign key, so something needs to be worked on here), unit price, message, and special instructions

  // order = models.ForeignKey(order, on_delete=models.CASCADE)
  // item = models.ForeignKey(item, on_delete=models.CASCADE)
  // unit_price = models.FloatField()
  // message = models.CharField(max_length=50, null=True)
  // special_instructions = models.CharField(max_length=200, null=True)
  axios.post(addOrderAPI[itemObject])
}

