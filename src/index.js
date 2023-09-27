function doubleLetter(str) {
    let doubledStr = '';
    for (let i = 0; i < str.length; i++) {
        doubledStr += str.charAt(i) + str.charAt(i);
    }
    return doubledStr;
}


const inputString = "hello";
const result = doubleLetter(inputString);
console.log(result);
