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

// Response status codes
const SUCCESS_STATUS = 200;
const BAD_REQ_STATUS = 400;
const SERVER_ERROR_STATUS = 500;

// Response messages
const MISSING_PARAM_MESSAGE = "Missing one or more of the required params.";
const SERVER_ERROR_MESSAGE = "An error occurred on the server. Try again later.";

const SERVER_URL = "localhost:8000";

/**
 * Mock get request for a statement.
 */
app.post("/query", async (req, res) => {
  try {
    res.type("json");

    // Get the phrase from the body parameter list.
    let phrase = req.body.phrase;
    if (!phrase) {
      // Respond with a missing parameter message if not given an `phrase`.
      res.status(BAD_REQ_STATUS).send(MISSING_PARAM_MESSAGE);
      return;
    }

    // Respond with a successful status code and the updated number of likes in plain text format.
    res.status(SUCCESS_STATUS).send(phrase);
  } catch (err) {
    // Respond with an error status code and an error message in plain text format.
    res.type("text");
    res.status(SERVER_ERROR_STATUS).send(SERVER_ERROR_MESSAGE);
  }
});

app.use(express.static("public"));

const PORT = process.env.PORT || 8000;
app.listen(PORT);