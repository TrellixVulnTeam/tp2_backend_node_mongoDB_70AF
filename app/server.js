var path = require('path');
var express = require('express');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose', { useUnifiedTopology: true }));
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log');
exphbs = require('express-handlebars');

app = express();

/*app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');*/


var hbs = exphbs.create({
    helpers: {
        defaultLayout: 'main',
        renderName: function (user) {
            return 'Nom : ' + user.name;
        },
        renderAge: function (user) {
            return 'age : ' + user.age;
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');





var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//config
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/book_phone', { useNewUrlParser: true });

// import models
models = require('./models'); /*il cherche dans index.js*/

// import routing
require('./routing/callback');
require('./routing/users');


console.log(new models.User());/*creation d'un nouvel objet*/


app.listen(8080);
