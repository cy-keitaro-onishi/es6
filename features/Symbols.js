// Symbols enable access control for object state.
var key = Symbol('name');

class Hoge
{
  constructor(name)
  {
    this[key] = name;
  }
  sayNameBad()
  {
    console.log('my name is %s', this.name);
  }
  sayName()
  {
    console.log('my name is %s', this[key]);
  }
}

var c = new Hoge("poti")
console.log(c.name);
console.log(c[key]);
c.sayNameBad()
c.sayName()

// 各シンボルはユニークであり、原則他のシンボルと同じものを作り出すことはできない。
console.log(key === key);
console.log(Symbol('name') === key);
console.log(Symbol('name') === Symbol('name'));
