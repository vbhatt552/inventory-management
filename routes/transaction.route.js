import express from 'express'
import { createTran, getTrans, getTransById } from '../controllers/transaction.controller.js';

const router = express.Router();

router.post('/',createTran);
router.get('/',getTrans);
router.get('/:id',getTransById);
export default router;