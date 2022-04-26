import axios from "axios";

let testServerAPI = 'https://8000-anthonydeva-djangobacke-pk8s8czgzh1.ws-us42.gitpod.io/floraison/items/'

export async function axiosGet() {
  return axios
    .get(testServerAPI)
    .then((response) => response.data);
}

