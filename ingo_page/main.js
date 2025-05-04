let API = "http://localhost:3000/data";
let ID = JSON.parse(localStorage.getItem('key'))
console.log(ID);
let nameOfProduct  = document.querySelector('.nameOfProduct')
let ava = document.querySelector('.ava')
let name = document.querySelector('.name')
let marka = document.querySelector('.marka')
let price = document.querySelector('.price')
let info = document.querySelector('.info')
let btnAdd = document.querySelector('.btnAdd')




async function getData() {
    try {
        let {data} = await axios.get(`${API}?id=${ID}`)
        get(data)
        console.log(data);
              
    } catch (error) {
        console.log(error);
        
        
    }
    
}
getData()

function get(data){
    data.forEach(elem=> {
        nameOfProduct.textContent = `Home / ${elem.name}`

        ava.src = `.${elem.avatar}`
        name.textContent=elem.name
        marka.textContent=`By ${elem.category}`
        price.textContent = `${elem.price}$`
        info.textContent=elem.info
        
    });
}

