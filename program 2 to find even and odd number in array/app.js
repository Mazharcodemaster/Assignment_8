var data = Number(prompt("Enter the number"));
var array = [data];
var i;
for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        document.write("you enter the negtive value" + array);
    }
    else if (array[i] > 0) {
        document.write("you enter the positive value " + array);
    }
    else {
        document.write("Value equall to zero" + array);
    }
}
