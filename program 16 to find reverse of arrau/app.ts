var value:number=Number(prompt("Enter the length of array"))
var array:any[]=new Array()

for(let i=0;i<value;i++){
    array[i]= (prompt("Enter the value of arr"))
}

var value2=array.reverse()
document.write("Reverse of array : ",value2)