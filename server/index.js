import express from 'express';
import routev2 from './routes/routes';

const app = express();
app.use(express.json());
app.use(routev2);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on ${port} port`));

app.get('/', (req, res) => {
  res.send('Welcome to Employee managment');
});

export default app;
