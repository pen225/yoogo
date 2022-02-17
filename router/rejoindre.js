"use strict";
const express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db/database');
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false })

router
.route('/')
.get((req, res) =>{
    res.render('../views/rejoindre-club');
})

.post(urlencodedParser,(req, res) =>{
    let{email, civilite, nom, prenom, codePostal, ville, anniversaire} = req.body;
    console.log(req.body);
   
    let sql = "INSERT INTO `user`(`email`, `civilite`, `nom`, `prenom`, `codePostal`, `ville`, `anniversaire`) VALUES (?,?,?,?,?,?,?)";
    // res.redirect('/')
    // res.sendStatus(201);
    db.query(sql,[email,civilite,nom,prenom,codePostal,ville,anniversaire],(err, res) =>{
        if (err) {
            console.log(err);
        }else{
            console.log("success");
        }
    })
});



module.exports = router;