exports.debug= function(e) {
    console.log(e);
    res.status(500).send('Le fichier est manquant ou mal ecrit');
    throw new Error('Le fichier est manquant');
}