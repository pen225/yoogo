const express = require('express');
const app = express();
const PORT = 5000;


const index = require('./router/index')
const contact = require('./router/contact')
const rejoindre = require('./router/rejoindre');
const database = require('./database');
app.use('/rejoindre', rejoindre);
app.use('/contact', contact);
app.use('/', index);

database.connect(function(error) {
    if (!!error) {
        console.log("erreur");
    }else{
        console.log("connecter");
    }
})




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