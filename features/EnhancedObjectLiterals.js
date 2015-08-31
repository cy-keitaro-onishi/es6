/**
 * xx.yyをyyのみで定義することができる
 *
 * Object literals are extended to support setting the prototype at construction,
 * shorthand for foo: foo assignments, defining methods and making super calls.
 * Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.
 */
var name = 'Hoge';
var handler = () => 'hi! my Handler';
var obj = {
  name,
  handler
};

console.log(obj);
console.log(obj.name);
console.log(obj.handler());
