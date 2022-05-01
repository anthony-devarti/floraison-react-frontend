import axios from "axios";

let testServerAPI = 'https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us43.gitpod.io/floraison/items/'
const testServerAPICookies = "https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us43.gitpod.io/floraison/cookie_type/"

export async function axiosGet() {
  return axios
    .get(testServerAPI)
    .then((response) => response.data);
}

export async function axiosGetCookies() {
  return axios
    .get(testServerAPICookies)
    .then((response) => response.data)
}
