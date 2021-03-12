const express = require('express')

const app = express()
const port = 3333

const server = app.listen(port, () => {
    console.log('Express server is listening on port ' + port)
})

app.get('/', (req, res, next) => {
    res.status(200).send('Hello from Express')
})
