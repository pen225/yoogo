const mysql = require('mysql');
let bd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '8080',
    database: 'yoogo'
});

module.exports = bd;
