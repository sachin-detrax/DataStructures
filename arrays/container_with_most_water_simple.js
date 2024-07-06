const waterArray = [7, 1, 2, 3, 9]

const findMaxArea = function (arr) {
    let maxArea = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = (a + 1); b < arr.length; b++) {
            let bi = b;
            let ai = a;
            let CMA = Math.min(arr[a], arr[b]) * (bi - ai)
            maxArea = Math.max(maxArea, CMA);
        }
    }
    return maxArea
}

console.log(findMaxArea(waterArray))