const mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: '12345',
    port: '8080',
    database: 'yoogo'
});

module.exports =db;