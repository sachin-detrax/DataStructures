const waterArray = [4, 8,1, 2, 3, 9]

const findMaxArea = function (arr) {
    let maxArea = 0;
    for (let a = 0; a < arr.length; a++) {
        let ai = a; let bi = arr.length;
        let length =  Math.min(arr[a],arr[arr.length-1])
        let width = (bi-ai)
        let Currentarea = length * width 
        maxArea = Math.max(Currentarea,maxArea)
    }
    return maxArea
}

console.log(findMaxArea(waterArray))