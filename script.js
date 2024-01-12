function getRandomNumber() {
    let num = Math.floor(Math.random()*9);
    return num;
}

function stringToNum(text) {
    let upText = text.toUpperCase(); //dont know if this is valid
    let numText="";
    let num=0;
    for (let i = 0; i<upText.length;i++) {
        num = upText.charCodeAt(i) - 64;
        if (num.toString().length == 1) {
            numText+="0"+num.toString();
        } else {
            numText+=num.toString();
        }
    }

    return numText;
}
function pushNum(text) {
    let numArray = text.split("");
    for (let i = 0; i<numArray.length;i++) {
        numArray[i] = getRandomNumber().toString() + numArray[i] + getRandomNumber().toString();
    }
    return numArray.join("");
}

console.log(stringToNum("Lab"));
let x = stringToNum("Lab");
console.log(pushNum(x));


