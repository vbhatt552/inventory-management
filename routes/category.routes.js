import express from 'express'
import { createCat, getCat,updateCat,deleteCat } from '../controllers/category.controller.js'

const router = express.Router();

router.post('/',createCat);
router.get('/',getCat);
router.put('/:id',updateCat);
router.delete('/:id',deleteCat);
export default router;
