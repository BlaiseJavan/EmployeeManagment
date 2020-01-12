import express from 'express';
import employee from './employeeRoutes';

const app = express();

// Base route
app.use('/api/auth', employee);

export default app;
