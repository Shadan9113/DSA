function targetElement(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return `Target found at index ${i}`
        }
    }
    return `Target not Found`
}
console.log(targetElement([10,20,30,40],30))