import express from 'express';
import employeeController from '../controllers/employeeController';
import validator from '../middleware/validator';
import auth from '../middleware/auth';

const router = express();

// employees routes
router.post('/signup', validator.employee, employeeController.signup);
router.post('/signin', validator.signin, employeeController.signin);

router.post('/', auth, employeeController.createEmployee);
router.delete('/:id', auth, employeeController.deleteEmployee);
router.put('/:id', auth, employeeController.updateEmplooyee);

export default router;
