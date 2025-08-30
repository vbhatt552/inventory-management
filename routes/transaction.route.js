import express from 'express'
import { createTran, getTrans } from '../controllers/transaction.controller.js';

const router = express.Router();

router.post('/',createTran);
router.get('/',getTrans);
export default router;