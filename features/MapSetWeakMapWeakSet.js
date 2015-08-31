// Set
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s);
console.log(s.size);
console.log(s.has('hello'));
console.log('----------------');

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m);
console.log(m.size);
console.log(m.get(s));
console.log('----------------');

// Weak Maps
// なぜWeakMapなのかはこちら参照
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// 弱参照を用いるため、WeakMap のキーは列挙できません
var wm = new WeakMap();
wm.set(s, 'Hoge');
console.log('wm size is %s', wm.size);
console.log('wm.get(set) is %s', wm.get(s));
console.log('----------------');

// Weak Sets
var ws = new WeakSet();
ws.add(s);
console.log('ws has s: %s', ws.has(s));
console.log('ws has wm: %s', ws.has(wm));
