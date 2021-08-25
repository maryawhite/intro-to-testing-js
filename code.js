// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

//sayHello function--sayHello should say Hello to any string we pass to it
function sayHello(input) {
    if (typeof input === "boolean") {
        return helloWorld();
    }
        else {
            return "Hello, " + input + "!";
        }
}

//isFive function
function isFive(number){
    if(number === 5) {
        return true
    } else {
        return false
    }
}

//isEven function
function isEven(num){
    num = parseInt(num);
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//isVowel function

function isVowel(letter){
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U"){
        return true;
    } else {
        return false;
    }
}

//add function
function add(num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2
}





