interface MyConfig {
  title: number;
  debug: boolean;
}

// a. MyConfigの全プロパティを任意型（〜?）に
type MyConfigOption = Partial<MyConfig>

// b. プロパティの省略を許容
let conf: MyConfigOption = {};


////////////////////////////

// interface MyConfig {
//   title?: number;
//   debug?: boolean;
// }