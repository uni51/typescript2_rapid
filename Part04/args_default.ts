function showTime(time: Date = new Date()): string {
  return '現在時刻：' + time.toLocaleString();
}

console.log(showTime()); // 結果例：2020/3/21 16:40:04