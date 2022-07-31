console.log('in client');

$(readyNow)


function readyNow() {
    console.log('in jquery');
// setting up click listeners
    $('#plus').on('click', addNum)
    $('#minus').on('click', subtractNum)
    $('#multiply').on('click', multiplyNum)
    $('#divide').on('click', divideNum)
    $('#equals').on('click', sumCall)
    $('#clear').on('click', clearNum)

    
}
// created global variables for access throughout code
let input1 = '';
let input2 = '';
let answerOutput = '';
let operator = '';

function getCalculation() {
    console.log('in get calculations');
// GET the stored objects from the server; run them through function to display on DOM
    $.ajax({
        method: 'GET',
        url: '/calc',
    }).then (function(response) {
        console.log(response);
        displayAnswer(response);
    })
    // clear out values below
    // renderDOM();
    $('#num1').val('');
    $('#num2').val('');
    input1 = '';
    input2 = '';    
    operator = '';
    
}
// operation function to correspond with operation type and click listener
function addNum () {
    console.log('clicking addNum');    
    
    operator = '+';
    
}
// operation function to correspond with operation type and click listener
function subtractNum () {
    console.log('clicking subtractNum');
    
    operator = '-';
}
// operation function to correspond with operation type and click listener
function multiplyNum () {
    console.log('clicking multiplyNum');

    operator = '*';
}
// operation function to correspond with operation type and click listener
function divideNum () {
    console.log('clicking divideNum');

    operator = '/';
}

// function to run the actual calculations; 
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
    
    // pushing the equations to the DOM
    renderDOM();
    // $('#num1').val('');
    // $('#num2').val('');
    // input1 = '';
    // input2 = '';    
    // operator = '';
};

// function to clear out all of the appended info and input info when user pushes "clear button"
function clearNum () {
    console.log('clicking clearNum');

    $('.container').empty();
    $('#history').empty();
    $('#num1').val('');
    $('#num2').val('');
    input1 = '';
    input2 = '';    
    operator = '';
}

// renders equations to DOM -- does not show answer to equation; could not get that sorted out.
// I know it has to do with timing and GET/POST, just don't quite know the solution.
function renderDOM() {
    console.log('rendering to the DOM');
    
        $('#history').append(`
        <li>${input1} ${operator} ${input2} </li>
        `);
        
}
 
// function called in GET to display answers on DOM dynamically.
function displayAnswer(answers) {
    console.log('in display');
    
    
    // loop through array of objects requested from POST through GET function
    for(let answer of answers) {        
        $('.container').empty()
        
        $('.container').append(`
        <h1>${answer.ans}</h1>
        `)
        answerOutput = answer.ans //currently doesn't serve a purpose until I can figure out how to capture it for the renderDOM function
    }
}
