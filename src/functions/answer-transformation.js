// Transforms string to array with objects
export function strToObjsArr(str) {
    let objsArr = [];
    for (let i = 0; i < str.length; i++) {
        objsArr.push({ id: i, name: str[i]})
    }

    return objsArr
}
