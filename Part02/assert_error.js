function toInt(value) {
    // b. 小数点以下の値を丸め
    return value.toFixed(0);
}
// a. number型の引数にstring型の値を渡す
console.log(toInt('hoge'));
