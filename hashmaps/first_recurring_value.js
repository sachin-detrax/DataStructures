const searchArray = [2, 4, 5, 2, 3, 6, 7, 4, 6];
const secondArray = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const thirdArray = [2, 3, 4, 5];

const findFirstRecurringValue = function (searchArray) {

    let checkForRecurringHashmap = new Map();

    for (let i = 0; i < searchArray.length; i++) {
        if (checkForRecurringHashmap.has(searchArray[i])) {

            let val = checkForRecurringHashmap.get(searchArray[i])
            return searchArray[i]

        }
        if (!checkForRecurringHashmap.has(searchArray[i])) {
            checkForRecurringHashmap.set(searchArray[i], 1);
        }

    }
    return "not found";
}


console.log(findFirstRecurringValue(searchArray))