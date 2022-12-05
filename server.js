const express = require('express');
const app = express();
const ejs = require('ejs')
const port = 3000;
const routes = require('./routes/index')
const db = require('./database/db')


app.set('view engine','ejs')
app.use(express.json())
app.use(routes)


db().then(() => {
    app.listen(port, (req, res) => {
        console.log(`Server is running at ${port}`)
    })
})
