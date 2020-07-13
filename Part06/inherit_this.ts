{
class MyClass {
  // コンストラクター（現在値_valueを初期化）
  constructor(private _value: number) {}
  // 現在地を取得するgetter
  get value(): number {
    return this._value;
  }
  // 与えられた値valueで加算
  plus(value: number): this {
    this._value += value;
    return this;
  }
  // 与えられた値valueで減算
  minus(value: number): this {
    this._value -= value;
    return this;
  }  
}

// a. 10+10-5の計算
let clazz = new MyClass(10);
console.log(clazz.plus(10).minus(5).value); // 結果：15
}
