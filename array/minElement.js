const arr = [1,2,3,4];

function minElement(arr){
         let min = arr[0];
    for(let i=1; i<arr.length; i++){
   
        if(arr[i] < min){
            min = arr[i]
        }
          
    }
  return min
}
console.log(minElement(arr))