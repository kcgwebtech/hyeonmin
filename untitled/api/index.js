const express = require('express');
const app = express();
const port = 8888;
app.get('/hi',(req,res) =>{
    res.send('hi');
});
app.listen(port);
console.log("start server with 8888!");