// a. Conditional Typesによる型の振り分け
type Intersection<T, U> = T extends U ? T : never;

// b. 共用型の共通部分だけを取り出す
type CommonType = Intersection<string | boolean | number, boolean | string[] | string>;

