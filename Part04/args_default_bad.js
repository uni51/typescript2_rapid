function showTime(time) {
    // 引数timeが省略された場合は、現在時刻を出力
    if (time === undefined) {
        return '現在時刻：' + (new Date()).toLocaleString();
    }
    else {
        return '現在時刻：' + time.toLocaleString();
    }
}
console.log(showTime());
