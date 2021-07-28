const Mysqli = require('mysqli');

let conn = new Mysqli ( {
    host: 'localhost',
    post: 3300,
    user: 'root',

    db: 'mega_shop'
})

let db = conn.emit(false, '')

module.exports = {
    database: db
};