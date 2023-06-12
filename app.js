const express = require('express');
// const { getDb } = require('./db');
const { connectToDb, getDb } = require('./db')

const app = express();
//  db connetion
let db
connectToDb((err) => {
    if (!err) {
        app.listen(3000, ()=> {
            console.log('server is running on port 3000');
        })
        db = getDb()
    }
})

app.get('/books', (req, res) => {
    res.json({mssg: "welcome"})
});

