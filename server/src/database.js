const mongoose = require('mongoose')
const models = require('./models/models.js')

const URI = 'mongodb://localhost:27017/educApp'

mongoose.connect(URI)
    .then(db => {
        console.log('Connected to Myapp')
        mongoose.connection.db.listCollections( {name: 'users' }) 
            .next((err, collinfo) => {
                if (collinfo == null) {
                    initdb()
                    return
                }
                
                models.users.countDocuments(function(err, count){
                    if(count == 0) initdb()
                })
            })
    })
    .catch(err => console.error(err))

function initdb() {
    console.log("Inicializando base de datos con usuarios por defecto")
    const User = models.users
    user = new User({ name: 'Fabian', email: 'fabianpombal@gmail.com', password: '123456', gender: 'male', edad: 20})
    user.save()  

    user = new User({ name: 'Manuel', email: 'manuel@gmail.com', password: 'ghj45', gender: 'male', edad: 12})
    user.save()  

    user = new User({ name: 'Johna', email: 'johna@gmail.com', password: 'sdfghjk', gender: 'male', edad: 15})
    user.save()  

    user = new User({ name: 'Mateo', email: 'mateo@gmail.com', password: 'rtyuiop', gender: 'male', edad: 16})
    user.save()  

    user = new User({ name: 'Pablo', email: 'pablo@gmail.com', password: 'wertyuik', gender: 'male', edad: 24})
    user.save()  
}

module.exports = mongoose
