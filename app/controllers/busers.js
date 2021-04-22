
exports.index = function (req, res){
     var returnResponse = function (obj) {
         res.render('users', {users: obj});
     };

     models.User.find().sort({name:1}).select(' -_id').execAsync()
     .then(logLib.logContent)
     .then(returnResponse)
     ;
};

exports.one = function (req,res) {
    var returnResponse = function (obj) {
        res.render('user', {user : obj /*, username : obj.name, userage: obj.age*/});
    };
    var options = {name: req.params.name};

    models.User.findOneAsync(options)
        .then(logLib.logContent)
         .then(returnResponse)
    ;
};



exports.create = function (req, res) {
var returnResponse = function (obj) {
res.json(obj);
};

models.User(req.body).saveAsync()
     .then(logLib.logContent)
     .then(returnResponse);

     };


exports.update = function (req, res) {
var returnResponse = function (obj) {
res.json(obj);
};

var options = {_id: req.body._id};

var returnUpdatedObject = function () {
models.User.findOneAsync(options)
    .then(logLib.logContent)
    .then(returnResponse)
    ;
}
delete req.body['_id'];

models.User.findOneAndUpdateAsync(options, req.body)
    .then(returnUpdatedObject);
     };


exports.delete = function (req, res) {
    var returnResponse = function () {
    res.json({message: 'All is fine'});
    };

    var returnError = function () {
    res.status(500).json({message: '***problème***'});
    };
    var options = {_id: req.params.id};

    models.User.findOneAndRemoveAsync(options)
        .catch(logLib.throwError)
        .done(returnResponse, returnError)
    ;
};
