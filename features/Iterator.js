/**
 * return するobjectのにnext()を定義しなければいけない
 * またnext()が{
 *   done: boolean,
 *   value: any,
 * }
 * の形でreturn させる必要がある
 *
 * iteratorをぶん回すには for ..of構文を利用する
 */
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    console.log('ここは一度しか評価されない');
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {
          done: false,
          value: cur
        }
      }
    }
  }
}

for (var n of fibonacci) {
  if (n > 1000)
    break;
  console.log(n);
}
