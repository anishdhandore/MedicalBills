const express = require('express')
const data = require("./data.js")
app = express()

// using ejs 
app.set('view engine', 'ejs')

// allows us to use information from forms
app.use(express.urlencoded({extended: true}))

// on a get request, also send the medical bills)
app.get('/', (req, res) => {
    res.render('home.ejs', {data: data})
})

// new entry in the medical bills
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

// handling a post request
app.post('/', (req, res) => {
    const isValid = true;
    if (isValid){
        data.push({
            name : req.body.name,
            address : req.body.address,
            hospitalName: req.body.hospitalName,
            serviceDate: req.body.date,
            amount: req.body.amount
        }) // pushing our new information into the medical bills data
        console.log(data)
        res.redirect('/') // redirect back to home page to see the updated table   
    }
    else{
        console.log("error")
    }
})

app.listen(3000)