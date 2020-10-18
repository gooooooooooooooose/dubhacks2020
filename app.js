/**
 * Copyright 2020
 * Idess Lee, Mitchell Massie for DubHacks 2020
 */
"use strict";

// To support HTTP requests
const express = require("express");
const app = express();

app.use(express.static("frontend/public"));
// please

const PORT = process.env.PORT || 8000;
app.listen(PORT);