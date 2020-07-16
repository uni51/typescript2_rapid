{
    function getProp(obj, name) {
        return obj[name];
    }
    var p = { name: 'お弁当', price: 500 };
    console.log(getProp(p, 'name')); // 結果：お弁当（string型）
    console.log(getProp(p, 'price')); // 結果：500（number型）
}
