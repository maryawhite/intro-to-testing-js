// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//unit tests for the sayHello function
describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return "Hello, Jane!" when input ("Jane") is passed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when input ("Alex") is passed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when input ("Pat") is passed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, " + name + "!" when executed', function() {
        expect(sayHello(name)).toBe("Hello, " + name + "!");
    });
    //add expect(sayHello()).toBe("Hello, World!"). Then refresh report.html to see the failing test.
    it("expect sayHello to be Hello, World!", function() {
        expect(sayHello("World")).toBe("Hello, World!")
    });
    //Next, add expect(sayHello(true)).toBe("Hello, World!") to the tests.js file.
    it("return Hello, World! if sayHello is true", function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    //Now, add expect(sayHello(false)).toBe("Hello, World!") to the tests.js file.
    it("return Hello, World! if sayHello is false", function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

    //#10 isFive function
describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should never return "undefined" when called', function () {
        expect(isFive()).not.toBe(undefined);
    });
    it("should return true when 5 is entered", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return false when -5 is entered", function(){
        expect(isFive(-5)).toBe(false);
    });
    it("should return false when a string is entered", function(){
        expect(isFive("string")).toBe(false);
    });
});
//#11 isEven function
describe("isEven", function(){
    it("should be a defined function",function(){
        expect(typeof isEven).toBe("function");
    });
    it('should never return "undefined" when called', function () {
        expect(isEven()).not.toBe(undefined);
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when 2 is passed",function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return false when 3 is passed", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return true when isEven(-4) is executed",function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when a string is passed isEven('banana returns false)", function(){
        expect(isEven("banana")).toBe(false);
    });
    it("should return false when isEven(Infinity)", function(){
        expect(isEven(Infinity)).toBe(false);
    })
    it("should return false when isEven(false)", function(){
        expect(isEven(false)).toBe(false);
    });
    it("should return false when isEven(true)", function(){
        expect(isEven(true)).toBe(false);
    });
});

//12 isVowel
describe("isVowel", function() {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true for isVowel(\"a\")", function () {
        expect(isVowel("a")).toBe(true);
    });
    it("should return true for isVowel(\"A\")", function () {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false for isVowel(4)", function () {
        expect(isVowel("4")).toBe(false);
    });
    it("should return false for isVowel('banana')", function () {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when isVowel(false)", function () {
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when isVowel(true)", function () {
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when isVowel()", function () {
        expect(isVowel()).toBe(false);
    });
});
//#13 add function The add function should sum two numbers, as long as each input is a number or a string containing a number.
describe("add", function() {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    });
    it("should return a number when executed",function(){
        expect(typeof(add())).toBe("number");
    })
    it("should return 5 for add(2, 3)",function (){
        expect(add(2, 3)).toBe(5);
    });
    it("should return -12 for add(-3, -9)", function (){
        expect(add(-3, -9)).toBe(-12);
    })
    it("should return 11 for add('5', 6)", function(){
        expect(add("5", 6)).toBe(11);
    })
    it("should return 6 for add('-4','10')", function(){
        expect(add("-4","10")).toBe(6);
    });
    it("should return NaN for add(\"banana\", \"split\")", function (){
        expect(isNaN(add("banana", "split"))).toBe(true); //why doesn't toBe NaN work here?
    });
    it("should return NaN for add(2, \"apples\")", function(){
        expect(isNaN(add(2, "applies"))).toBe(true);
    });
    it("should return NaN for add()", function(){
        expect(isNaN(add())).toBe(true);
    })

});


/* looks like you cannot put parameters into the expect...
it('should return the string "Hello, " + input + "!" when executed', function() {
        expect(sayHello(input)).toBe("Hello, " + input + "!");
    });
 */