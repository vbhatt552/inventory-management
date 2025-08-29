import express from 'express'
import { createSup, deleteSup, getSup, getSupById } from '../controllers/supplier.controller.js';

const router = express.Router();

router.post('/',createSup);
router.get('/',getSup);
router.get('/:id',getSupById);
router.delete('/:id',deleteSup);
export default router ;