/**
 * 関数に渡す引数のデフォルト値を指定することができるようになった
 */
function add(x=10, y= 20)
{
  return x+y;
}

console.log('1+2 = %s', add(1,2));
console.log('1 = %s', add(1));
console.log(' = %s', add());
