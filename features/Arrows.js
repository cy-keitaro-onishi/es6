/**
 * 無名関数をfunction...ではなく=>を使って書くことができるようになった
 * また関数をワンライナーで書く場合、評価した結果がreturnの値として扱われる
 * functionとはことなり、thisは定義したオブジェクトと同じ
 */
var evens = [0, 2, 4, 6, 8, 10];
var fives = [];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

var bob = {
  _name: "Bob",
  _friends: [
    'A',
    'B',
    'C',
  ],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}

console.log('evens: %s', evens);
console.log('odds: %s', odds);
console.log('nums: %s', nums);
console.log('fives: %s', fives);
bob.printFriends();

var Obj = {
  x: [1],

  hoge : function(){
    this.x.map(function(){
      console.log(this);
    });
  },
  fuga : function(){
    this.x.map(() => {
      console.log(this);
    });
  },
  piyo : function(){
    this.x.map(function(){
      console.log(this);
    }, this);
  },
};

Obj.hoge();
Obj.fuga();
Obj.piyo();
