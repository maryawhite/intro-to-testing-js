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


/* looks like you cannot put parameters into the expect...
it('should return the string "Hello, " + input + "!" when executed', function() {
        expect(sayHello(input)).toBe("Hello, " + input + "!");
    });
 */