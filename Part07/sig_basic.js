{
    // b. Car型の変数cを宣言
    var c = {
        type: 'トラック',
        run: function () {
            console.log(this.type + "\u304C\u8D70\u308A\u307E\u3059\b\u3002");
        }
    };
    c.run(); // 結果：トラックが走ります
}
