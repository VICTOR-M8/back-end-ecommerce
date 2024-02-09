import { Router } from "express";

import { indexController } from "../controllers/index.contollers.js";
const router = Router();


router.get('/product', indexController );

export default router
