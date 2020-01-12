import express from 'express';
import employeeController from '../controllers/employeeController';
import validator from '../middleware/validator';
import auth from '../middleware/auth';

const router = express();

// employees routes
router.post('/signup', employeeController.signup);
router.post('/signin', validator.signin, employeeController.signin);

export default router;
