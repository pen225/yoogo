"use strict";
const express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const usersQuery = require('../queryDb');





router
.route('/')
.get(urlencodedParser,(req, res) =>{
    res.render('../views/connexionForm');
    let ddd = usersQuery.selectDonnees(req.body)
    console.log(ddd);
})

.post(urlencodedParser,(req, res) =>{
    let ddd = usersQuery.selectDonnees(req.body)
    res.redirect('/rejoindre')
});



module.exports = router;