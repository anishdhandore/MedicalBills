const express = require('express')
app = express()

app.set('view engine', 'ejs')
// allows us to use information from forms
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    // res.sendStatus(500)
    // res.send("Hello World!")
    res.render('home.ejs')
})

app.listen(3000)