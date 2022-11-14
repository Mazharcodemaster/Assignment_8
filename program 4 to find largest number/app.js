var value = Number(prompt("Enter the length of array"));
var i;
var number = [];
for (i = 0; i < value; i++) {
    number[i] = prompt("Enter the value");
}
// var number:number[]=[1,3,7,5]
var max;
var min = 0;
for (var i_1 = 0; i_1 < number.length; i_1++) {
    if (number[i_1] > min) {
        min = number[i_1];
        max = min;
    }
}
document.write("Largest number", max);
