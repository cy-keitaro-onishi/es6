/**
 * 2015-06-28現在
 * babelもまだ対応していないfirefox/edgeではサポートされているっぽい
 */
var handler = {
    get: function(receiver, name){
        return name in receiver?
            receiver[name] :
            'hoge';
    }
};

var p = new Proxy({}, handler);
p.a = 1;

console.log('p.a is %s ', p.a);
console.log('p.b is %s ', p.b);
