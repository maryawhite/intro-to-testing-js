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





