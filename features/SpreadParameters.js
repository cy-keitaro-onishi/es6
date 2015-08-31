/**
 * 配列の内容をフラットにして関数の引数に渡すことができる
 * いままでだとapplyを使わないと実装できなかった
 *
 * http://taiju.hatenablog.com/entry/20100515/1273903873
 */
function add(x=0, y=0, z=0)
{
  return x+y+z;
}

console.log('[1,2,3] = %s', add(...[1,2,3]));
console.log('[1,2,3,4] = %s', add(...[1,2,3,4]));
console.log('[1,2] = %s', add(...[1,2]));
