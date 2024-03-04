function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    // eval function convert user number to code
    var result = eval(expression);
    document.getElementById('display').value = result;
}