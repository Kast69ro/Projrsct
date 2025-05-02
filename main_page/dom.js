let box = document.querySelector('.right')

function get (data) {
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

export {get}