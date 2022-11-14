var value = Number(prompt("Enter the length of array"));
var array = new Array();
var min;
for (var i = 1; i <= value; i++) {
    array[i] = Number(prompt("Enter the value of arr"));
}
min = array[1];
for (var i = 1; i <= array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
document.write("minimum value :", min);
