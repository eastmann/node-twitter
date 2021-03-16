const express = require('express')

const app = express()
const port = 3333

const server = app.listen(port, () => {
    console.log('Express server is listening on port ' + port)
})

app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/', (req, res, next) => {

    const payload = {
        pageTitle: 'Home'
    }

    res.status(200).render('home', payload)
})
