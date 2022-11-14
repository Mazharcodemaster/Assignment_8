var value = Number(prompt("Enter the length of array"));
var array = new Array();
for (var i = 0; i < value; i++) {
    array[i] = (prompt("Enter the value of arr"));
}
var value2 = array.reverse();
document.write("Reverse of array : ", value2);
