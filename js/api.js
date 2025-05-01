let API = 'http://localhost:3000/data'
import { get } from "./dom.js";

async function getData() {
    try {
        let {data} = await axios.get(API)
        get(data)
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

export {getData,delUser,saveEdit,saveStatus,saveAdd}

async function delUser(id) {
    try {
        let {data} = await axios.delete(`${API}/${id}`)
        getData()
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

async function saveEdit(user) {
    try {
        let {data} = await axios.put(`${API}/${user.id}`,user)
        getData()
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

async function saveStatus(elem) {
    
    let user = {
        ...elem,
        status: !elem.status
    }

    
    try {
        let {data} = await axios.put(`${API}/${user.id}`,user)
        getData()
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

async function saveAdd(user) {
    try {
        let {data} = await axios.post(API,user)
        getData()
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}