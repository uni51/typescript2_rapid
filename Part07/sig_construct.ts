{
  // Figure型は「number／number型を受け取るコンストラクター」を持つべき
  interface Figure {
    new(width: number, height: number): Triangle;
  }

  class Triangle {
    constructor(private width: number, private height: number) {}
  }

  // Triangle型（クラス）をFigure型に代入（OK）
  let Tri: Figure = Triangle;

}