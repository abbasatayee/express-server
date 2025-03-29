import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({
    status: `
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.    
    ` });
});

app.get('/users', (req, res) => {
  res.status(200).send({

    users: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'John Smith' },
      { id: 4, name: 'Jane Smith' },
    ],


  );
})

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world ' });
});

// Version the api
app.use('/api/v1', api);
