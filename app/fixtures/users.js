var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('book_phone');
var id = pow.createObjectId;

fixtures.load({
    users: [
        {
            "_id": id(),
            "name":"Dupont",
            "lastname":"Maurice",
            "age":"55",
            "job":"technical support",
            "tel":"0123456789"
        },
        {
            "_id": id(),
            "name":"Valentino",
            "lastname":"Anna",
            "age":"23",
            "job":"Secretary",
            "tel":"0123456789"
        },
        {
            "_id": id(),
            "name":"Barak",
            "lastname":"Shaima",
            "age":"40",
            "job":"Financial assistant",
            "tel":"0123456789"
        }
    ]
});