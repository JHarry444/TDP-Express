const router = require('express').Router();

const names = ['Jordan', 'Cameron', 'Chris', 'Aswene'];

router.get('/readAll', (req, res) => res.send(names));

router.get('/read/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  return res.send(names[id]);
});

router.post('/create', (req, res) => {
  const newName = req.body.name;
  names.push(newName);
  res.status(201).send(`Successfully added ${names[names.length - 1]}`);
});

router.put('/update/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const newName = req.query.name;
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  const oldName = names[id];
  names.splice(id, 1, newName);
  return res.send(`Replaced ${oldName} with ${names[id]}`);
});

router.delete('/remove/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  names.splice(id, 1);
  return res.status(204).send();
});

module.exports = router;
