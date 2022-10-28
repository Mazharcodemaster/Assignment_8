var num = Number(prompt('Enter the length of array'));
var array = [];
var j = 1;
for (var i = 0; i <= num; i++) {
    array[i] = Number(prompt('Enter the value '));
}
for (var i = 0; i <= num; i++) {
    if (array[i] % 2 === 0) {
        console.log('Even number :', array[i]);
    }
}
for (var i = 0; i <= num; i++) {
    if (array[i] % 2 === 1) {
        console.log('Odd number :', array[i]);
    }
}
