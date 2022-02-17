const mysql = require('mysql');
let bd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yoogo'
});


module.exports = bd;