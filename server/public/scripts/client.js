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



}



function addNum () {
    console.log('clicking addNum');    
    
    let addition = {
        input1: $('#num1').val(),
        input2: $('#num2').val(),
    }
    
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: addition,

    }).then(function(response){
        console.log(response);

        // getCalculations();
    })
}
function subtractNum () {
    console.log('clicking subtracNum');
}
function multiplyNum () {
    console.log('clicking multiplyNum');
}
function divideNum () {
    console.log('clicking divideNum');
}
function sumCall () {
    console.log('clicking sumCall');
    
    
    
    $('#num1').val(''),
    $('#num2').val('');

};

function clearNum () {
    console.log('clicking clearNum');
}
