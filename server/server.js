
//import express
// express function is given!

const express = require ('express');

const app = express();

const PORT = 5000;


app.use(express.urlencoded({extended: true}));


app.use(express.static('server/public'));


app.get('/calc', function (req, res)
    console.log('GET /calc');

    res.send(calculations);
);

app.post('/calc', function (req, res)
    console.log('POST /calc');


    
)













app.listen(PORT, function () {
    console.log('listening on port', PORT);
})