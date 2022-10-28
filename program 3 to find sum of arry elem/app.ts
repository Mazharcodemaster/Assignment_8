var num:number=Number(prompt('Enter the lenght of arry'))
var array:number[]=new Array()
let i;
let sum=0
for( i=1;i<=num;i++){
    array[i]=Number(prompt('Enter the value'+i))
    sum=sum+array[i]
}
console.log(`Sum of array element : ${sum}`)
