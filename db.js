const { MongoClient } = require('mongodb')
let dbConnection
module.exports = {
    // connect to db
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://0.0.0.0:27017/books')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        }).catch(err => {
            console.log(err);
            return cb(err)
        })
    },
    // get db
    
        getDb: () => dbConnection
}
