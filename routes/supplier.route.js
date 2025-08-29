import express from 'express'
import { createSup, getSup, getSupById } from '../controllers/supplier.controller.js';

const router = express.Router();

router.post('/',createSup);
router.get('/',getSup);
router.get('/:id',getSupById);
export default router ;