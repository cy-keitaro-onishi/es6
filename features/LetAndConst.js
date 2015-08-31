/**
 * let  で宣言された変数はそのブロック内でのみ有効
 *      varと異なりスコープ内での再宣言はできない
 * const : 定数であり再代入できません
 */
var x = 0;
if(true)
{
  var x = 1;
  console.log(x);
}
console.log(x);
console.log('-------------------');

let y = 0;
if(true)
{
  let y = 1;
  console.log(y);
}
console.log(y);
console.log('-------------------');

function hoge()
{
  var x = 2;
  console.log(x);
}
hoge();
console.log(x);
console.log('-------------------');

// varは何回宣言してもエラーにならない
var z;
var z;
var z;

// letはエラーが発生する
// let a;
// let a;
// let a;

// const is single-assignment.
const HOGE = 'hoge';
console.log('HOGE is %s', HOGE);
// HOGE = 'fuga';
