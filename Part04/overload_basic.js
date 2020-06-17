function show(value) {
    // number型の場合
    if (typeof value === 'number') {
        console.log(value.toFixed(0));
        // boolean型の場合
    }
    else {
        console.log(value ? '真' : '偽');
    }
}
show(10.358); // 結果：10
show(false); // 結果：偽
show('ほげ'); // 結果：エラー
