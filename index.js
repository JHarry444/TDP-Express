const express = require('express'); // importing express

const app = express(); // initialising it
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // converts the request body from JSON (res => res.json())

app.get('/greeting', (req, res) => {
  res.send('Hello, World!');
});

app.post('/create', (req, res) => {
  console.log('Received:', req.body);
  res.status(201).send('Created successfully');
});

app.put('/update/:id', (req, res) => {
  console.log('Query parameters:', req.query);
  res.send();
});

app.delete('/remove/:id', (req, res) => {
  console.log('Params:', req.params);
  res.status(204).send();
});

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  console.log('Server started on', server.address().port);
});
