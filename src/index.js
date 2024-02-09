import express from 'express'
import indexRouter from './routes/index.routes.js'
import product from './routes/Product.routes.js'

const app = express()

app.use(express.json())
app.use(indexRouter)
app.use(product)

app.listen(3000)
console.log('escuchando el puerto 3000')