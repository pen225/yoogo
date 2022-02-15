"use strict";
const express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');

router
.route('/')
.get((req, res) =>{
    res.render('../views/contact');
});

module.exports = router;