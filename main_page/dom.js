import { filterCategory,search,filterPrice } from "./api.js";


let box = document.querySelector('.right')
let selCategori = document.querySelector('.selCategori')
let moneyFilter = document.querySelector('.moneyFilter')
let inp = document.querySelector('.inp')
let value = document.querySelector('.value')


function get (data) {
    box.innerHTML=''
    data.forEach(elem => {
        let container = document.createElement('a')
        container.classList.add('container')

        let img = document.createElement('img')
        img.src = `.${elem.avatar}`

        let divNameCategory = document.createElement('div')
         divNameCategory.classList.add('divNameCategory')   
        let name = document.createElement('h3')
        name.textContent = elem.name

        let category = document.createElement('h4')
        category.textContent = elem.category

        
        let divPriceBtn = document.createElement('div')
        divPriceBtn.classList.add('divPriceBtn')

        let price = document.createElement('h4')
        price.textContent = `${elem.price}$`
        
        let btnCart = document.createElement('button')
        btnCart.textContent = 'Add product'
        
        divNameCategory.append(name,category)
        divPriceBtn.append(price,btnCart)
        container.append(img,divNameCategory,divPriceBtn)
        box.append(container)
        
    });
}



selCategori.onchange=()=>{
    filterCategory(selCategori.value)
}
export {get}

inp.oninput=()=>{
    search(inp.value.trim())
}

moneyFilter.onchange=()=>{
    value.textContent = moneyFilter.value    
    filterPrice(+moneyFilter.value)
    
}