const express = require('express');
const app = express();
const port = 8888;
app.use(express.json());

app.use('/auth', require('./auth'));

app.listen(port); // port로 서버 열기

console.log("start server with 8888!");