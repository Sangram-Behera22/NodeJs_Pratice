const express = require('express');
require('dotenv').config();
const app = express();
// regular middleware
app.use(express.json());
// urlencoded middleware
app.use(express.urlencoded({extended:true}));
const fsmodule = require('./route/core_modules/fsmodule');
app.use('/api/fsmodule',fsmodule);

module.exports = app;

