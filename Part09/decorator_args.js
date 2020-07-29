var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    function log(tag) {
        return function (target, key, desc) {
            var origin = desc.value;
            desc.value = function () {
                console.group(tag);
                console.log(key + " start\u2026");
                var start = Date.now();
                var result = origin.apply(this, arguments);
                var end = Date.now();
                console.log(key + " end\u2026");
                console.log("Process Time " + (end - start) + "ms");
                console.groupEnd();
                return result;
            };
        };
    }
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.prototype.add = function (x, y) {
            var s = Date.now();
            while (Date.now() - s < 4500)
                ;
            return x + y;
        };
        __decorate([
            log("Add Method")
        ], MyClass.prototype, "add");
        return MyClass;
    }());
    var c = new MyClass();
    console.log(c.add(10, 20));
}
