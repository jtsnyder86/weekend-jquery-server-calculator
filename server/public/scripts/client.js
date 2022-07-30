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