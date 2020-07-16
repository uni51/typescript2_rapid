{
  type ReadonlyProduct = {
    readonly name: string,
    readonly age: number  
  }

  type Product = {
    -readonly [K in keyof ReadonlyProduct]: ReadonlyProduct[K];
  }
}