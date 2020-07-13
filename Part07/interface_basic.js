{
    // Person型を受け取るgreet関数
    function greet(p) {
        console.log("\u3053\u3093\u306B\u3061\u306F\u3001" + p.name + "\u3055\u3093\uFF01");
    }
    var pl = {
        name: 'サクラ',
        age: 2,
        // genderプロパティはPerson型では未定義
        gender: 'female'
    };
    greet(pl);
}
