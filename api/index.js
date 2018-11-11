const express = require('express');
const app = express();
const port = 8888;

const cookieParser = require('cookie-parser');
const Token = require('./token');

app.use(express.json());
app.use(cookieParser());
app.use(Token.checkToken);

app.get('/testAPI',(req,res) =>{
    res.json({
        data: {
            message : 'API 테스트 성공',
        }
    });
});

app.use('/auth', require('./auth'));

app.listen(port); // port로 서버 열기

console.log("start server with 8888!");