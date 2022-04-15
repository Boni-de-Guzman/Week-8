const foodContainer = document.querySelector('#food-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/food`

const foodCallBack = ({ data: food }) => displayFood(food)
const errCallback = err => console.log(err)

const getAllMenus = () => axios.get(baseURL).then(foodCallBack).catch(errCallback)
const createMenu = body => axios.post(baseURL, body).then(foodCallBack).catch(errCallback)
const deleteMenu = id => axios.delete(`${baseURL}/${id}`).then(foodCallBack).catch(errCallback)
const updateMenu = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(foodCallBack).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createMenu(bodyObj)

    name.value = ''
    price.value = ''
    imageURL.value = ''
}

function createMenuCard(food) {
    const foodCard = document.createElement('div')
    foodCard.classList.add('food-card')

    foodCard.innerHTML = `<img alt='menu' src=${food.imageURL} class="food-cover-image"/>
    <p class="name">${food.name}</p>
     <div class="btns-container">
         <p class="food-price">$${food.price}</p>
       </div>
    <button onclick="deleteMenu(${food.id})">delete</button>
    `


    foodContainer.appendChild(foodCard)
}

function displayFood(arr) {
    foodContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMenuCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMenus()