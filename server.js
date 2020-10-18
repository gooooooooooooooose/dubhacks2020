/**
 * Copyright 2020
 * Idess Lee, Mitchell Massie for DubHacks 2020
 */
"use strict";

// To support HTTP requests
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', (req, res) => {
   return res.send('pong');
});
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);