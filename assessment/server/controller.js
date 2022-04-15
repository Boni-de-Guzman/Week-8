const food = require('./db.json')
let globalId = 4

module.exports = {
    getAllMenu: (req, res) => res.status(200).send(food),
    deleteMenu: (req, res) => {
        let index = food.findIndex(elem => elem.id === +req.params.id)
        food.splice(index, 1)
        res.status(200).send(food)
    },
    createMenu: (req, res) => {
        let { name, price, imageURL } = req.body
        let newMenu = {
            id: globalId,
            name, 
            price,
            imageURL
        }
        food.push(newMenu)
        res.status(200).send(food)
        globalId++
    },
    updateMenu: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = food.findIndex(elem => +elem.id === +id)

        if (food[index].price <= 10000 && type === 'minus') {
            food[index].price = 0
            res.status(200).send(food)
        } else if (type === 'plus') {
            food[index].price += 10000
            res.status(200).send(food)
        } else if (type === 'minus') {
            food[index].price -= 10000
            res.status(200).send(food)
        } else {
            res.sendStatus(400)
        }
    }
}

