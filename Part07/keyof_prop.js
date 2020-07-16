{
    // function getProp(obj: any, name: string) {
    //   return obj[name];
    // }
    function getProp(obj, name) {
        return obj[name];
    }
    var p = { name: 'お弁当', price: 500 };
    console.log(getProp(p, 'name'));
    console.log(getProp(p, 'hoge'));
}
