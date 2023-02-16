const express = require('express')
const data = require("./data.js")
app = express()

app.set('view engine', 'ejs')
// allows us to use information from forms
app.use(express.urlencoded({extended: true}))

// on a get request, also send the medical bills)
app.get('/', (req, res) => {
    // res.sendStatus(500)
    // res.send("Hello World!")
    // show all the bills here 
    // res.send(JSON.stringify(data))
    console.log(data)
    res.render('home.ejs', {data: data})
})

app.listen(3000)