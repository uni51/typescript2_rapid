// let Counter = function() {
//   // 現在のthisを退避
//   let _this = this;
//   _this.count = 0;
//   // 1000ミリ秒間隔で、countプロパティをインクリメント
//   setInterval(function(){
//     _this.count++;
//   }, 1000);
// };

let Counter = function() {
  // 2つのthisは同じもの
  this.count = 0;
  setInterval(() => { this.count++; }, 1000);
};