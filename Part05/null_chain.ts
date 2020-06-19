let hoge: string | null | undefined;

// a. hogeがundefined/nullでなければtrimメソッドを呼び出す
// let result = (hoge === null || hoge === undefined)?
// undefined : hoge.trim();

let result = hoge?.trim();