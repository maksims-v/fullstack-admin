import express from 'express';
const userController = require('../controllers/user-controller.js');
const authMiddleware = require('../middlewares/auth-middleware');
const { body } = require('express-validator');

const router = express.Router();

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

export default router;
