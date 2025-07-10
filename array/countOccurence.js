function countOccurence(arr, target){
  
  let count = 0;
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] === target){
      count++
    }
  }
  return count
  
}
console.log(countOccurence([1,2,3,4,3,2,2,2,2,2,2],2))