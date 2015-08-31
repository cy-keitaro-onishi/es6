# ES6について

## Introduction

ECMAScript6は次のECMAScriptのスタンダードであり、2015/6に裁可の予定です。  
2009年のES5以降の大幅なアップデートになります。メジャーなJavascriptエンジンでは実装が進んでいます。  

## ES6対応状況

http://kangax.github.io/compat-table/es6/

## ES6を学ぶには？

- babelが提供しているES6勉強用のフォーラム: http://babeljs.io/docs/learn-es2015/
- learnyouシリーズのES6(babel版): https://github.com/yosuke-furukawa/tower-of-babel
- MDNで調べる: https://developer.mozilla.org/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla
- まとまった日本語向けのドキュメントはまだ存在しない. Qiita/Blogなんかではぽろぽろと

## 結局どう変わるのか

- 今まで面倒臭かった書き方を楽に書けるようになる
- 新しい組み込みクラスによってできなかったことができるようになる
- ひと通り触った感じ、JavaScriptを楽しく書きことができるようになるためのアップデートだと感じた。以上。

# babelの使い方

```
# install
npm install --global babel
```

```
# 実行方法、違いは実行して確かめて
> babel es6/Sample.js
> babel-node es6/Sample.js
```

# 簡単にES6を動かせるサイト

http://www.es6fiddle.net/

# Features

- [Arrows](features/Arrows.js)
- [Classes](features/Classes.js)
- [LetandConst](features/LetAndConst.js)
- [TemplateStrings](features/TemplateStrings.js)
- [Symbols](features/Symbols.js)
- [DefaultParameters](features/DefaultParameters.js)
- [RestParameters](features/RestParameters.js)
- [SpreadParameters](features/SpreadParameters.js)
- [Destructuring](features/Destructuring.js)
- [EnhancedObjectLiterals](features/EnhancedObjectLiterals.js)
- [Generators](features/Generators.js)
- [Iterator](features/Iterator.js)
- [MapSetWeakMapWeakSet](features/MapSetWeakMapWeakSet.js)
- [Modules](features/ModulesCli.js)
- [Number](features/Number.js)
- [String](features/String.js)
- [Array](features/Array.js)
- [Promise](features/Promise.js)
- [Proxies](features/Proxies.js)
- [Reflect](features/Reflect.js)
- [SubclassableBuiltIns](features/SubclassableBuiltIns.js)
- [TailCalls](features/TailCalls.js)
- [Unicode](features/Unicode.js)
