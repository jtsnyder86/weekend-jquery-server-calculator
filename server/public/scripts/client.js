console.log('in client');

$(readyNow)


function readyNow() {
    console.log('in jquery');

    $('#plus').on('click', addNum)
    $('#minus').on('click', subtractNum)
    $('#multiply').on('click', multiplyNum)
    $('#divide').on('click', divideNum)
    $('#equals').on('click', sumCall)
    $('#clear').on('click', clearNum)

    // getCalculation()

}

let input1 = ''
let input2 = ''
let operator = '';

function getCalculation() {
    console.log('in get calculations');

    $.ajax({
        method: 'GET',
        url: '/calc',
    }).then (function(response) {
        console.log(response);
        displayAnswer(response);
    })
    
}

function addNum () {
    console.log('clicking addNum');    
    // input1 = $('#num1').val();
    // input2 = $('#num2').val();
    operator = '+';
    // let addition = {
    //     num1: $('#num1').val(),
    //     num2: $('#num2').val(),
    // }

    // $.ajax({
    //     method: 'POST',
    //     url: '/calc',
    //     data: addition,

    // }).then(function(response){
    //     console.log(response);

    //     getCalculations();
    // })
}
function subtractNum () {
    console.log('clicking subtractNum');
}
function multiplyNum () {
    console.log('clicking multiplyNum');
}
function divideNum () {
    console.log('clicking divideNum');
}
function sumCall () {
    console.log('clicking sumCall');
    input1 = $('#num1').val();
    input2 = $('#num2').val();
    

    let equation = {
        num1: input1,
        num2: input2,
        op: operator
    }

    $.ajax({
        method: 'POST',
        url: '/calc',
        data: equation,
    }).then(function(response){
        console.log(response);

        getCalculation();
    });
    
    
    renderDOM();
    $('#num1').val('');
    $('#num2').val('');
    input1 = '';
    input2 = '';    
    operator = '';
};

function clearNum () {
    console.log('clicking clearNum');
}

function renderDOM() {
    console.log('rendering to the DOM');
    
        $('#history').prepend(`
        <li>${input1} ${operator} ${input2} = </li>
        `);
        
}

function displayAnswer(answers) {
    console.log('in display');
    
    

    for(let answer of answers) {        
        $('.container').empty()
        
        $('.container').append(`
        <h1>${answer.ans}</h1>
        `)
    }
}
