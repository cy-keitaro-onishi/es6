// Array, Date, DOM Elementなどのサブクラスが作成可能
class MyArray extends Array {
  constructor(...args) { super(...args); }
  push(val){
    super.push(val)
    super.push(val)
  }
}

var arr = new MyArray();
arr.push(1);
console.log(arr.length);
console.log(arr);
