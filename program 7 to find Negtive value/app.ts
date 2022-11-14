var value:number=Number(prompt("Enter the length of array"))
var array:number[]=new Array()
var max;
var min;
for(let i=0;i<value;i++){
    array[i]=prompt("Enter the value of array")

}
// var array:number[]=[1,2,-2,4,5]
var count=0;
for(let i=0;i<array.length;i++){   

        
         if(array[i]<0){
            count++
         }

}
document.write("Negtive value in array :" ,count)