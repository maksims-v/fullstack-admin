import express from 'express';
import { body } from 'express-validator';
import { login, logout, getUsers } from '../controllers/auth.js';

const router = express.Router();

// router.post(
//   '/registration',
//   body('email').isEmail(),
//   body('password').isLength({ min: 3, max: 32 }),
//   userController.registration,
// );
router.post('/login', login);
// router.post('/logout', logout);
router.get('/users', getUsers);

export default router;
