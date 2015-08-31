// ジェネレーターは処理を抜け出すことも後から再帰することもできる関数です
// ジェネレーターのコンテキスト (変数の値)は再帰しても保存されます。
// ジェネレーター関数を呼び出しても関数は直ぐには実行されません。
// 代わりに、関数のためのiterator オブジェクトが返されます。
// iteratorのnext() メソッドが呼ばれると、ジェネレーター関数の処理は、イテレーターから返された値を特定する最初のyield演算子か、ほかのジェネレーター関数に委任する yield*に達するまで実行されます。
// next()メソッドは 、生産された値を含むvalueプロパティとジェネレーターが最後の値を持つかを示すdoneプロパティを持つオブジェクトを返します。
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
