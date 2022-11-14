var value = Number(prompt("Enter the length of array"));
var array = new Array();
var max;
var min;
for (var i = 0; i < value; i++) {
    array[i] = prompt("Enter the value of array");
}
// var array:number[]=[1,2,-2,4,5]
var count = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        count++;
    }
}
document.write("Negtive value in array :", count);
