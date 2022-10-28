var value:number=Number(prompt('Enter the length of array'))
var array:number[]=[]
var i;
for(i=1;i<=value;i++){
  array[i]=Number(prompt(`Enter the array value ${i}`))
}
array.push(10)
var copy_array:number[]=array;
console.log(copy_array)