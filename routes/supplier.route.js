import express from 'express'
import { createSup, getSup } from '../controllers/supplier.controller.js';

const router = express.Router();

router.post('/',createSup);
router.get('/',getSup);

export default router ;