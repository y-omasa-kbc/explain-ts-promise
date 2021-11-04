# explain-ts-promise
## About This Repository
Intended to be provided to students of Kawahara Computer Business College (KBC) as an example of a dynamyc webpage project using Express framework on TypeScript.  
このリポジトリは、河原電子ビジネス専門学校の学生に提供するために作成された、TypeScriptにおける非同期処理の記述を解説する際のコードサンプルです。


## サンプルコード
1. callback1.ts  
関数の引数に別の関数を指定する例
1. callback2.ts  
関数の引数として別の関数を受け取り、時間がかかる処理の終了時にコールバック関数として呼び出す例
1. callbackHell.ts  
コールバック関数が再帰的に記述された例。いわゆる「コールバック地獄」の例示
1. promise.ts  
asyncを指定した非同期関数の作成と呼び出し方の例


## 実行方法
```
npx ts-node [ファイル名]
```