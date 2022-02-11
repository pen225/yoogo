const express = require('express');
const app = express();
const PORT = 8080;


app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/rejoindre-club', (req, res) =>{
    res.render('rejoindre-club');
})

app.get('/contact', (req, res) =>{
    res.render('contact');
})

app.get('/', (req, res) =>{
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log(`Listen on port ${PORT}`);
})