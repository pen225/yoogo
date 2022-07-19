const express = require('express');
const app = express();
const index = require('./router/index')
const contact = require('./router/contact')
const rejoindre = require('./router/rejoindre');
const connexionForm = require('./router/connexionForm');
require('dotenv').config()


// db.connect(function(err){
//     if (err) {
//         console.log(err)
//     }else{
//         app.use('/rejoindre', rejoindre);
//         app.use('/contact', contact);
//         app.use('/connexionForm', connexionForm);
//         app.use('/', index);
//         app.set('views', './views');
//         app.set('view engine', 'ejs');
//         app.use('/public', express.static('public'));
//     }
// })

app.use('/rejoindre', rejoindre);
app.use('/contact', contact);
app.use('/connexionForm', connexionForm);
app.use('/', index);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.listen(process.env.PORT)