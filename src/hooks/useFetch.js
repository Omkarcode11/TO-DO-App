import axios from "axios";

async function useFetch(url, data) {
  let res = await axios.get(url,data);
  return res;
}

export default useFetch;
