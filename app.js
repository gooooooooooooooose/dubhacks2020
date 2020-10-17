/**
 * Copyright 2020
 * Idess Lee, Mitchell Massie for DubHacks 2020
 */
"use strict";

app.use(express.static("public"));

const PORT = process.env.PORT || 8000;
app.listen(PORT);