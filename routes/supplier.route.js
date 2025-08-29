import express from 'express'
import { createSup } from '../controllers/supplier.controller.js';

const router = express.Router();

router.post('/',createSup);


export default router ;