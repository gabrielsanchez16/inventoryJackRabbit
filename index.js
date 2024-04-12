const express = require('express')
const cors = require('cors')
const {db} = require('./config/db')
const dotenv = require('dotenv')
dotenv.config({path: ".env"})
const initModels = require("./models/initModels")
//* Configuraciones Iniciales
const app = express()



//* Archivos de Rutas

const shoesRouter = require("./routes/shoes.route.js").router
const brandRouter = require("./routes/brand.route.js").router


//Habilitar lectura de datos de formularios

app.use(express.urlencoded({extended:true}))

const whitelist = ['https://buscador-vuelos.netlify.app/#/registro','http://localhost:5173/#/registro']//acceso a rutas indicadas

//Routing
app.use(cors()) //permitiendo acceso

try {
    db.authenticate();
    db.sync()
    console.log('conexion correcta a la base de datos')
}catch(error){
    console.log(error)
}


app.use(express.json())
app.use("/api/v1/uploads", express.static("./uploads"))
app.use("/api/v1/shoes", shoesRouter)
app.use("/api/v1/brands",brandRouter)



const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})


exports.default = app