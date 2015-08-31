/**
 * Rest -> 残り
 * 可変長な引数をサポート
 */
function add(...x)
{
  return x.reduce((a, b) => {
    return a+b;
  }, 0);
}

console.log('1+2+3+4+5 = %s', add(1,2,3,4,5));
console.log('1 = %s', add(1));
