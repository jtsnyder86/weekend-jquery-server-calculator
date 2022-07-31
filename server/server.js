
//import express
// express function is given!

const express = require ('express');

const app = express();

const PORT = 5000;

let calculations = []
let answers = []

app.use(express.urlencoded({extended: true}));


app.use(express.static('server/public'));


app.get('/calc', function (req, res){
    console.log('GET /calc');

    res.send(answers);
});

app.post('/calc', function (req, res){
    console.log('POST /calc');

    console.log(req.body);

    calculations.push(req.body);
    
    calculate()

    res.sendStatus(200) //OK
});

function calculate() {
    console.log('calculating');
    let answer;
    for (let property of calculations) {
        if (property.op == '+'){
            answer = Number(property.num1) + Number(property.num2)
        }
    }
    console.log(answer);
    return answers.push({ans : answer});
    
    
}











app.listen(PORT, function () {
    console.log('listening on port', PORT);
})