var Counter = function () {
    // 現在のthisを退避
    var _this = this;
    _this.count = 0;
    // 1000ミリ秒間隔で、countプロパティをインクリメント
    setInterval(function () {
        _this.count++;
    }, 1000);
    console.log(_this.count);
};
Counter();
