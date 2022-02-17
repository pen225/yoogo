const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: '12345',
    port: '8080',
    database: 'yoogo'
});

