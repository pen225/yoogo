"use strict";
const express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');

const database = require('../database');

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router
.route('/')
.get((req, res) =>{
    res.render('../views/rejoindre-club');
})

.post(urlencodedParser,(req, res) =>{
    console.log(req.body);
    // res.redirect('/')
    // res.sendStatus(201);
})
.post((req, res) =>{
    const {email, nom} = req.body;
    database.query()
    if (email && nom) {
       
    }
})

module.exports = router;