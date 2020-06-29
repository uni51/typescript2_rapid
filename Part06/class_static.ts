class Figure {
  // 静的プロパティPI(円周率)
  public static PI: number = 3.14159;
  // 静的メソッドcircle（円の面積）
  public static circle(radius: number): number {
    return radius * radius * this.PI;
  }
}

console.log(Figure.PI); // 結果：3.14159
console.log(Figure.circle(5)); // 結果：78.53975 