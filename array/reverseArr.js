function reverseArr(arr){
    const reverse = [];

    for(let i=arr.length-1; i>=0; i--){
        reverse.push(arr[i])
    }
    return reverse
}
console.log(reverseArr([1,2,3,4,5,6]))