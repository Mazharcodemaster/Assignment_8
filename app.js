var number = document.getElementById('num');
number === null || number === void 0 ? void 0 : number.addEventListener('click', function () {
    var input2;
    if (number != 0) {
        input2 = number % 10;
        number = Math.floor(number / 10);
    }
    if (input2 == 1) {
        document.write('one');
    }
    else if (input2 == 2) {
        document.write('two');
    }
    else if (input2 == 3) {
        document.write('three');
    }
    else if (input2 == 4) {
        document.write('four');
    }
    else if (input2 == 5) {
        document.write('five');
    }
    else if (input2 == 6) {
        document.write('six');
    }
    else if (input2 == 7) {
        document.write('seven');
    }
    else if (input2 == 8) {
        document.write('eight');
    }
    else {
        document.write('nine');
    }
});
