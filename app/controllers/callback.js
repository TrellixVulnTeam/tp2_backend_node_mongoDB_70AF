/**
 * Index Action
 *
 * @param req
 * @param res
 */

exports.index = function(req,res){

    var returnResponseOfFileJson = function(content){
        res.json(content);
    };

    fs.readFileAsync("test.json")
        .then(logLib.logContent)
        .then(JSON.parse)
        .catch(function(e) {
            console.log(e);
            res.status(500).send('Le fichier est manquant ou mal ecrit');
            throw new Error('Le fichier est manquant');
        })
        .done(returnResponseOfFileJson)
    ;
    console.log('autre chose');
};