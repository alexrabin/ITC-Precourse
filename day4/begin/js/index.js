
let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if (isNaN(value)){
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }
    screen.innerText = buffer;

}
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            runningTotal = 0;
            buffer = "0";
            previousOperator = null;
            break;
        case '←':
            buffer = buffer.slice(0, buffer.length-1);
            if (buffer === ""){
                buffer = "0";
            }
            break;
        case '=':
            if (previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = `${runningTotal}`;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    
    }
   
}
function handleMath(symbol){
    if (buffer === "0"){
        return;
    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;

    buffer = '0';
    
}
function flushOperation(intBuffer){
    if (previousOperator === "+"){
        runningTotal += intBuffer;
    }
    else if (previousOperator === "-"){
        runningTotal -= intBuffer;
    }
    else if (previousOperator === "÷"){
        runningTotal /= intBuffer;
    }
    else if (previousOperator === "×"){
        runningTotal *= intBuffer;
    }
    console.log('running total', runningTotal);
}
function handleNumber(numberString){
    if (buffer === "0"){
        buffer = numberString;
    }
    else{
        buffer += numberString;
    }
    screen.innerText = buffer;
}

function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText);

    })
}

init();