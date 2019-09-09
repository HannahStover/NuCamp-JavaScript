let inputOne = prompt('Enter first number', Number());
let inputTwo = prompt('Enter second number', Number());

function answer() {
    var output = Number();
    if (Number(inputOne) > Number(inputTwo) === true) {
        return Number(inputOne);
    } else {
        (Number(inputTwo) > Number(inputOne) === true);
            return Number(inputTwo);
    }
    return output;
}

alert(answer());