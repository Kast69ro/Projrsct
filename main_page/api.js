let API = "http://localhost:3000/data";
import { get } from "./dom.js";

async function getData() {
  try {
    let { data } = await axios.get(API);
    get(data);
  } catch (error) {
    console.log(error);
  }
}

export { getData };
