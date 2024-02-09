import { Router } from "express";
import { getProducts, createProducts, updateProducts, deleteProducts, getProduct } from "../controllers/product.controllers.js";

const router = Router();


router.get('/product', getProducts)    //ver todos
router.get('/product/:id', getProduct)  //ver uno

router.post('/product', createProducts) //crear un producto

router.put('/product', updateProducts) //actualizar un producto

router.delete('/product/:id', deleteProducts) //borrar un producto


export default router