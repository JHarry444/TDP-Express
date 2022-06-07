const express = require('express'); // importing express

const app = express(); // initialising it
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); // converts the request body from JSON (res => res.json())

app.use((req, res, next) => {
  console.log('Request received at', new Date());
  return next();
});

app.get('/greeting', (req, res) => {
  res.send('Hello, World!');
});

app.post('/create', (req, res) => {
  console.log('Received:', req.body);
  res.status(201).send('Created successfully');
});

app.put('/update/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  if (!id) return next({ status: 400, message: 'Invalid id' });
  console.log('Query parameters:', req.query);
  return res.send();
});

app.delete('/remove/:id', (req, res) => {
  console.log('Params:', req.params);
  res.status(204).send();
});

app.use('*', (req, res, next) => next({ status: 404, message: 'Invalid url' })); // catches 404's

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  console.log('Server started on', server.address().port);
});
