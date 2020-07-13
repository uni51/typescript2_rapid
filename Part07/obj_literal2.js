{
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.prototype.hoge = function () { };
        MyClass.prototype.foo = function () { };
        return MyClass;
    }());
    var x = new MyClass();
    x.hoge();
    x.foo();
}
