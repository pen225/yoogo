const mysql = require('mysql');
let bd = mysql.createConnection({
    host: '192.168.64.2',
    user: 'test',
    password: '12345',
    database: 'yoogo'
});

module.exports = bd;
