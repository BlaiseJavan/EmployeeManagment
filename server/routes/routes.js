import express from 'express';
import employee from './employeeRoutes';

const app = express();

// Base route
app.use('/api/auth', employee);
app.use('/api/employees', employee);

export default app;
