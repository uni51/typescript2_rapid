// 例外スローで、終端には到達しない
function hoge() {
    throw new Error('Error is occured.');
}
function eternal() {
    while (true) { }
}
