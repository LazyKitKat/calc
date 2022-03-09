let newStr = false;
let choice = NaN;
let finished = 0;
const btnNum = document.getElementsByClassName('btnNum');
const btnOperate = document.getElementsByClassName('btnOperate');
const inputBar = document.getElementById('myInput');
const resultBar = document.getElementById('result');

for (let i = 0; i < btnNum.length; i++) {
btnNum[i].addEventListener('click', function(tempVar) {
    tempVar = btnNum[i].value;
    if (newStr === false) {
        if (finished === 1) {
            resultBar.innerHTML = '';
            inputBar.innerHTML = '';
        }
    inputBar.innerHTML += tempVar;
    }
    else {
    resultBar.innerHTML += tempVar;
    }
});
}

for (let j = 0; j < btnOperate.length; j++) {
btnOperate[j].addEventListener('click', function() {
    if (btnOperate[j].value === 'Del') {
        delC();
    }
    else if (btnOperate[j].value === '=') {
        if (newStr === false) {
            return 0;
        }
        else {
            calculate(choice);
        }
    }
    else if (btnOperate[j].value === '+') {
        newStr = true;
        choice = 0;
    }
    else if (btnOperate[j].value === '-') {
        newStr = true;
        choice = 1;
    }
    else if (btnOperate[j].value === 'X') {
        newStr = true;
        choice = 2;
    }
    else if (btnOperate[j].value === '/') {
        newStr = true;
        choice = 3;
    }
});
}

function delC () {
    inputBar.innerHTML = '';
    resultBar.innerHTML = '';
    newStr = false;
}

function calculate(temp) {
    let a = Number(inputBar.innerHTML);
    let b = Number(resultBar.innerHTML);
    let myResult;
    if (temp === 0) {
        myResult = a + b;
        resultBar.innerHTML = myResult.toString(16);
    }
    else if (temp === 1) {
        myResult = a - b;
        resultBar.innerHTML = myResult.toString(16);
    }
    else if (temp === 2) {
        myResult = a * b;
        resultBar.innerHTML = myResult.toString(16);
    }
    else if (temp === 3) {
        myResult = a / b;
        resultBar.innerHTML = myResult.toString(16);
    }
    finished = 1;
    newStr = false;
}
