var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        // this.age = age;
    }
    return Person;
}());
var p = new Person('鈴木', 38);
p.age = 50;
