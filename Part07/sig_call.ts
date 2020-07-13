// number型の引数x, yを受け取り、number型の戻り値を返す
interface Calculate {
  (x: number, y: number): number;
}

let add: Calculate = function(a: number, b: number): number
{
  return a + b;
}