// 例外スローで、終端には到達しない
function hoge(): never {
  throw new Error('Error is occured.');
}

function eternal(): never {
  while(true) {}
}