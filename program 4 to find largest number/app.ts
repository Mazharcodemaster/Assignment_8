
var value:number=Number(prompt("Enter the length of array"))

var i;
var number:number[]=[]
for(i=0;i<value;i++){

     number[i]=prompt ("Enter the value")

}



// var number:number[]=[1,3,7,5]
var max;
var min=0;
for(let i=0;i<number.length;i++){

    if(number[i]>min){
        min=number[i]
        max=min

     
    }
 }

  document.write("Largest number", max)