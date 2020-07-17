{
  function hoge(arg1: string, arg2?: boolean): string | number {
    return 0;
  }

  // 引数型をもとに、[string, boolean] | [string]型を生成
  type TypeP = Parameters<typeof hoge>;

  // 戻り値型をもとに、string | number型を生成
  type TypeR = ReturnType<typeof hoge>;


  class MyClass {
    constructor(arg1: string, arg2?: boolean) {
      return 0;
    }
  }

  // コンストラクターの引数型をもとに、タプル型を生成するConstructorParameters<T>
  // 引数型をもとに、[string, boolean] | [string]型を生成
  type TypeC = ConstructorParameters<typeof MyClass>;

}