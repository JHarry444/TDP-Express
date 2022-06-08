const express = require('express'); // importing express

const app = express(); // initialising it
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); // converts the request body from JSON (res => res.json())

const { checkContentType, checkMethods } = require('./validation');

app.use((req, res, next) => {
  const logEntry = `host: ${req.headers.host}
ip: ${req.ip}
method: ${req.method}
path: ${req.path}
time: ${new Date()}`;
  console.log(logEntry);
  next();
});

const names = ['Jordan', 'Cameron', 'Chris', 'Aswene'];

app.get('/greeting', (req, res) => {
  res.send('Hello, World!');
});

app.use('/readAll', checkMethods(['GET']), (req, res) => res.send(names));

app.use('/read/:id', checkMethods(['GET']), (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  return res.send(names[id]);
});

app.use('/create', checkMethods(['POST']), checkContentType(['application/json']), (req, res, next) => {
  const newName = req.body.name;
  if (!req.body || !req.body.name) return next({ status: 400, message: 'Missing name!' });
  names.push(newName);
  return res.status(201).send(`Successfully added ${names[names.length - 1]}`);
});

app.use('/update/:id', checkMethods(['PUT']), (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  const newName = req.query.name;
  if (!req.query.name) return next({ status: 400, message: 'Missing name!' });
  const oldName = names[id];
  names.splice(id, 1, newName);
  return res.send(`Replaced ${oldName} with ${names[id]}`);
});

app.use('/remove/:id', checkMethods(['DELETE']), (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  names.splice(id, 1);
  return res.status(204).send();
});

app.use('*', (req, res, next) => next({ status: 404, message: 'Invalid url' })); // catches 404's

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  console.log('Server started on', server.address().port);
});
