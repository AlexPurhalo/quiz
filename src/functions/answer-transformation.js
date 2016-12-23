// Transforms string to array with objects
export function strToObjsArr(str) {
    let objsArr = [];
    for (let i = 0; i < str.length; i++) {
        objsArr.push({ id: i, name: str[i]})
    }

    return objsArr
}

// Randomizes position of items in the characters array
export function randomizeItems(array) {
    let i, tempVal, randIndex;

    for(i = array.length - 1; i > 0; i--) {
        // receives a random number dependent from iteration number
        randIndex = Math.floor(Math.random() * (i + 1)); // 1

        // swaps arrays items
        tempVal = array[i];
        array[i] = array[randIndex];
        array[randIndex] = tempVal;
    }

    return array
}


// Transforms array with objects to single string
export function objsArrToStr(objsArr) {
    let str = '';

    for (let i = 0; i < objsArr.length; i++) {
        str = str + objsArr[i]['name'];
    }

    return str;
}