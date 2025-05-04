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




async function filterCategory(value) {
  try {
    if(value == 'all') {
      let {data} = await axios.get(API)
    get(data)
    }
    else{
      let {data} = await axios.get(`${API}?category=${value}`)
    get(data)
    }
    
  } catch (error) {
    console.log(error);
    
  }
  
}


async function search(value) {
  try {
    let {data} = await axios.get(`${API}?name=${value}`)
    get(data)
    
  } catch (error) {
    console.log(error);
    
    
  }
  
}


async function filterPrice(value) {
  try {
    let response = await axios.get(API)
    if(value == 0 ) get(response.data)
   else{
    let filter = response.data.filter(({price})=> {
      return   price<=value;})
       get(filter)}
    
  } catch (error) {
    console.log(error);
    
    
  }
  
}




export { getData,filterCategory,search,filterPrice };