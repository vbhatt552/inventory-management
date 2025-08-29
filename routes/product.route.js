import express from 'express'
import { createProd, getProd, updateProd, getProdById, deleteProd } from "../controllers/product.controller.js";

const router  = express.Router();

router.post('/',createProd);
router.get('/',getProd);
router.put('/:id',updateProd);
router.get('/:id',getProdById);
router.delete('/:id',deleteProd);
export default router;