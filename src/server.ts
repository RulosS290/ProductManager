import colors from "colors"
import express from "express";
import swaggerUI from "swagger-ui-express"
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";
import router from "./router";
import db from "./config/db";

// Conectar a base de datos

export async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log(colors.magenta('Connection successful'))
    } catch (error){
        console.log(error)
        console.log(colors.red.bold('There was an error connecting to the database'))
    }
}

connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

// Docs
server.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUiOptions))

export default server
