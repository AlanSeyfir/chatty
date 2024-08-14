import express from 'express';
import { login, loginOut, signIn } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signIn);

router.post('/login', login);

router.post('/logout', loginOut);

export default router;
