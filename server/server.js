
//import express
// express function is given!

const express = require ('express');

const app = express();

const PORT = 5000;

// data posted from client pushed to this array for use in calculating answers
let calculations = []

// array for answers to display on DOM when GET requested
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
// function to run calculation on server side depending on the operation used
function calculate() {
    console.log('calculating');
    let answer;
    for (let property of calculations) {
        if (property.op == '+'){
            answer = Number(property.num1) + Number(property.num2)
        } else if (property.op == '-'){
            answer = Number(property.num1) - Number(property.num2)
        } else if (property.op == '*'){
            answer = Number(property.num1) * Number(property.num2)
        } else if (property.op == '/'){
            answer = Number(property.num1) / Number(property.num2)
        }
    }
    console.log(answer);
    return answers.push({ans : answer}); // pushes calculated answers to array (answers)
    
    
}











app.listen(PORT, function () {
    console.log('listening on port', PORT);
})