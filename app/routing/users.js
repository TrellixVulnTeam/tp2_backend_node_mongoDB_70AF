var users = require('../controllers/busers');

app.get('/users', users.index);
app.get('/busers/:name', users.one);
app.post('/users/', users.create);
app.put('/users', users.update);
app.delete('/users/:id', users.delete);
