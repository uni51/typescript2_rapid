var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // 継承関係にあるHoge／Fooクラス
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    var FooBar = /** @class */ (function (_super) {
        __extends(FooBar, _super);
        function FooBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FooBar;
    }(Hoge));
    // a. Hoge、またはその派生クラスだけを受け付けるジェネリック型
    var MyGenerics = /** @class */ (function () {
        function MyGenerics() {
        }
        MyGenerics.prototype.getValue = function () {
            return this.value;
        };
        return MyGenerics;
    }());
    // b. ジェネリック型にFooBar型を紐付け
    var g = new MyGenerics();
    g.value = new FooBar();
    console.log(g.getValue());
}
