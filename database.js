const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: 'localost',
    user: 'root',
    password: '',
    database: 'yoogo'
});