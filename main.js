function setNumber(number) {
    let resultString = document.getElementById('display');
    let currentText = resultString.innerText;
    resultString.innerText = currentText + number

}
function clearDisplay() {
    let resultString = document.getElementById('display');
    resultString.innerText = ''
}

function calculate() {
    let resultString = document.getElementById('display');
   
    if (resultString.innerText === "" || resultString.innerText === null) {
        resultString.innerText = "0";
    } else {

        try { 
            resultString.innerText = eval(resultString.innerText);
        } catch (error) {

            resultString.innerText = "Ошибка";
        }
    }
}


function getProcent() {
    let resultString = document.getElementById('display');
    if (!isNaN(parseFloat(resultString.innerText))) {
        let value = eval(eval(resultString.innerText) / 100);
        resultString.innerText = value.toFixed(4);
    }
}



function setDinamicNumber() {
    let resultString = document.getElementById('display');
    let number = parseFloat(resultString.innerText);
    number = -number;
    resultString.innerText = number.toString();
}

