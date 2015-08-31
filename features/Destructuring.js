// destructuring assignment構文は、配列やオブジェクトのリテラルの構築を写す構文を使用して、
// 配列かオブジェクトからデータを取り出すことを可能にするJavaScriptの式です。
var [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log('a is', a);
console.log('b is', b);
console.log('rest is', rest);
console.log('---------------------------');

var [a, , , , b]    = [1, 2, 3, 4, 5];
console.log('a is', a);
console.log('b is', b);
console.log('---------------------------');

var obj = {
  c: 'C',
  b: 'B',
  a: 'A'
}
var {a, b, c} = obj;
console.log('a is', a);
console.log('b is', b);
console.log('c is', c);

console.log('---------------------------');
a = 'AA';
console.log('a is', a);
console.log('obj a is %s', obj.a);

// swapping
// 今までだとテンポラリ変数を作らなければならなかった
var x = 'X';
var y = 'Y';
[x, y] = [y, x];
console.log('x is %s', x);
console.log('y is %s', y);
