console.log("Hello World");

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getAllMenu,deleteMenu, createMenu, updateMenu,} = require('./controller')

app.get(`/api/food`, getAllMenu)
app.delete(`/api/food/:id`, deleteMenu)
app.post(`/api/food`, createMenu)
app.put(`/api/food/:id`, updateMenu)

app.get("/api/compliment", (req, res) => {
    const compliments = ["Your success will astonish everyone",
                       "Your talents will be recognized and suitably rewarded",
                       "Your life will get more and more exciting",
                       "Your hard work will payoff someday",
                       "Your mentality is alert, practical, and analytical",
                       "You have had a good start. Work harder!",
                       "You are working hard.",
                       "A lifetime of happiness lies ahead of you",
                       "A smooth long journey! Great expectations.",
    ];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
    
  });

app.listen(4004, () => console.log(`running on 4004`));