type Type1 = string | number | boolean;

// Exclude<T, U>は、共用型Tから指定の型Uを除外します。
// Type1からstring/booleanを除去した結果、number型を生成
type NewType1 = Exclude<Type1, string | boolean>;

// Type1からstringを除去した結果、number | boolean型を生成
type NewType2 = Exclude<Type1, string>;

// Extarct<T, U>は、型T、Uに共通する型を抽出します。
// Type1と共通する型（string型）を抽出
type NewType3 = Extract<Type1, string | object>;

// Type1と共通する型（string | boolean型）を抽出
type NewType4 = Extract<Type1, string | boolean>;


// null | undefinedを除去するなら、NonNullable型を利用する
type Type2 = string | number | undefined;

// null | undefinedを除去するなら、NonNullable型を利用する
// undefinedを除去したstring | number型を生成
type NewType5 = NonNullable<Type2>;


type Type3 = string | null | undefined;

// null | undefinedを除去したstring型を生成
type NewType6 = NonNullable<Type3>;