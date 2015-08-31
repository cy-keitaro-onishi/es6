/**
 * class構文が使えるようになった
 *
 * - 継承することもできる
 * - superも使える
 * - staticメソッドも使える
 */
class Animal
{
  constructor(name)
  {
    this.name = name;
  }
  sayName()
  {
    console.log('my name is %s', this.name);
  }
  tree()
  {
    return 'Animal';
  }
  static classname()
  {
    return 'Animal';
  }
}

class Dog extends Animal
{
  sayName()
  {
    console.log('wanwan. my name is %s', this.name);
  }
  tree()
  {
    return (super.tree() + ':Dog');
  }
}

new Dog('poti').sayName();
new Animal('animal').sayName();
console.log(new Dog('animal').tree());
console.log(Dog.classname());
