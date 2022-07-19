const express = require('express');
const app = express();
const PORT = 5000;


const index = require('./router/index')
const contact = require('./router/contact')
const rejoindre = require('./router/rejoindre');
const connexionForm = require('./router/connexionForm');
const db = require('./db/database');



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




// app.get('/rejoindre-club', (req, res) =>{
//     res.render('rejoindre-club');
// })

// app.get('/contact', (req, res) =>{
//     res.render('contact');
// })

// app.get('/', (req, res) =>{
//     res.render('index');
// })

app.listen(PORT, ()=>{
    console.log(`Listen on port ${PORT}`);
})