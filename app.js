/**
 * Copyright 2020
 * Idess Lee, Mitchell Massie for DubHacks 2020
 */
"use strict";

// To support HTTP requests
const express = require("express");
const app = express();

// To support all POST requests
const multer = require("multer");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());


app.use(express.static("public"));

const PORT = process.env.PORT || 8000;
app.listen(PORT);