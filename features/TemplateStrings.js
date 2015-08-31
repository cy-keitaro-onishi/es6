// バッククォートで文字列を囲みます
// 改行可能です
// 変数を埋め込む場合${foo}のようにします
// Multiline strings
var multi = `
In ES5 this is
not legal.
`;

console.log(multi);

// Interpolate variable bindings
var name = 'tarou';
var introduction = `My name is ${name}`

console.log(introduction);
