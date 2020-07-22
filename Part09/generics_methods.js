var MyCollection = /** @class */ (function () {
    function MyCollection() {
    }
    MyCollection.addAll = function (data) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return data.concat(values);
    };
    return MyCollection;
}());
var x = [10, 15, 30];
console.log(MyCollection.addAll(x, 35, 50));
