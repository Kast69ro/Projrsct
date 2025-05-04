import { filterCategory, search, filterPrice, updateBox } from "./api.js";

const box = document.querySelector(".right");
const selCategori = document.querySelector(".selCategori");
const moneyFilter = document.querySelector(".moneyFilter");
const inp = document.querySelector(".inp");
const value = document.querySelector(".value");
const karzina = document.querySelector(".karzina");
const shopBox = document.querySelector(".shopBox");
const shopInnerBox = document.querySelector(".shopInnerBox");
let totalPrice = document.querySelector(".totalPrice");

karzina.onclick = () => {
  shopBox.showModal();
};

function get(data) {
  box.innerHTML = "";

  data.forEach((elem) => {
    const container = document.createElement("div");
    container.classList.add("container");

    container.onclick = () => {
      localStorage.setItem("key", JSON.stringify(elem.id));
    };

    const img = document.createElement("img");
    img.src = `.${elem.avatar}`;
    img.onclick = () => (window.location = "../ingo_page/index.html");

    const divNameCategory = document.createElement("div");
    divNameCategory.classList.add("divNameCategory");

    const name = document.createElement("h3");
    name.textContent = elem.name;
    name.onclick = () => (window.location = "../ingo_page/index.html");

    const category = document.createElement("h4");
    category.textContent = elem.category;

    const divPriceBtn = document.createElement("div");
    divPriceBtn.classList.add("divPriceBtn");

    const price = document.createElement("h4");
    price.textContent = `${elem.price}$`;

    const btnCart = document.createElement("button");
    btnCart.textContent = "Add product";
    btnCart.onclick = () => {
      addToCart(elem);
      renderCart()
      
    };
    
    divNameCategory.append(name, category);
    divPriceBtn.append(price, btnCart);
    container.append(img, divNameCategory, divPriceBtn);
    box.append(container);
  });
}

export { get };

selCategori.onchange = () => filterCategory(selCategori.value);
inp.oninput = () => search(inp.value.trim());
moneyFilter.onchange = () => {
  value.textContent = `${moneyFilter.value}$`;
  filterPrice(+moneyFilter.value);
};

let CardArr = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(CardArr));
}

function addToCart(product) {
  const found = CardArr.find((item) => item.id === product.id);
  if (found) {
    found.cnt = (found.cnt || 1) + 1;
  } else {
    CardArr.push({ ...product, cnt: 1 });
  }
  saveCart();
  sumPrice()
  
  renderCart();
}

function updateCart(product) {
  updateBox({ ...product, cnt: product.cnt });
  saveCart();
}

function deleteProduct(id) {
  CardArr = CardArr.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}
function sumPrice(cart) {
  let total = 0;

  cart.forEach((product) => {
    let number = parseFloat(product.price.replaceAll("$", ""));

    total += number * product.cnt;
  });

  totalPrice.innerHTML = `$${total}`;
}



function renderCart() {
  shopInnerBox.innerHTML = "";

  CardArr.forEach((product) => {
    const container = document.createElement("div");
    container.classList.add("cartBox");

    const img = document.createElement("img");
    img.src = `.${product.avatar}`;

    const textBox = document.createElement("div");
    textBox.classList.add("textBox");

    const titleBox = document.createElement("div");
    titleBox.classList.add("titleTextBox");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => deleteProduct(product.id);

    titleBox.append(name, deleteBtn);

    const price = document.createElement("p");
    price.textContent = `${product.price}$`;

    const cntBox = document.createElement("div");
    cntBox.classList.add("cntBox");

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.onclick = () => {
      product.cnt += 1;
      updateCart(product);
      renderCart();
    };

    const cntText = document.createElement("p");
    cntText.textContent = product.cnt;

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.onclick = () => {
      if (product.cnt > 1) {
        product.cnt -= 1;
        updateCart(product);
      } else {
        deleteProduct(product.id);
      }
      renderCart();
    };

    cntBox.append(plusBtn, cntText, minusBtn);
    textBox.append(titleBox, price, cntBox);
    container.append(img, textBox);
    shopInnerBox.append(container);
  });
}

renderCart();
