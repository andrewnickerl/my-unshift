function myUnshift(inputArray, value) {
    var newArray = [value]
    for (let i=0; i<inputArray.length; i++) {
        newArray.push(inputArray[i])
    }
    return newArray;
}

console.log(myUnshift([1,2,3,4],0))