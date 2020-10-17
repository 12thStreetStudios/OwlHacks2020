'use strict';

const express = require('express');

// Constants
const PORT = 8002;
const HOST = 'tss.srnd.net/';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);