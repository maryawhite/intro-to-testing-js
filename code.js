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






