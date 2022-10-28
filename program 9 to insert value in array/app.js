var value = Number(prompt('Enter the length of array'));
var array = [];
var i;
for (i = 1; i <= value; i++) {
    array[i] = Number(prompt("Enter the array value ".concat(i)));
}
array.push(10);
var copy_array = array;
console.log(copy_array);
