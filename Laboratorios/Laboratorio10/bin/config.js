const Mongoose = require("mongoose");
let database = "registerDB"
let host = 'localhost'
let port = '27017'
let uri = `mongodb://${host}:${port}/${database}`

const connect = ()=>{
    Mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log(`Ahuevo se conecto a ${database} correctamente y miguel es puto :V`)
    })
    .catch(()=>{
        console.log(`Un error ha ocurrido al conectar con la base y miguel es mega puto`)
    })
}

module.exports = {
    connect
}