//乗算を実行する関数。(3秒かかる)
//計算が終了したらメッセージを表示し、Promiseオブジェクトに成功を伝える。
async function promiseMultiple(opr1: number, opr2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        //setTimeoutで3000ms待ち、演算
        const timer = setTimeout(() => {
            let result = opr1 * opr2;
            console.log(opr1 + "*" + opr2 + "=" + result);
            resolve(result);     //Promiseオブジェクトに成功を伝え、データ(結果[result])を預ける
        }, 3000)
    });
}

//戻り値であるPromiseオブジェクトのthen()メソッドを呼び出す方式。
function withThen(): void {
    console.log("=== thenを使った実行 ===");
    promiseMultiple(1, 2)    //関数がPromiseオブジェクトを返すので
        .then((ans) => {       //Promiseのメソッドthenを動かす
            return promiseMultiple(ans, 3);  //関数が返してきたPromiseをそのままreturn - i
        })
        .then((ans2) => {                  // i で返されたPromiseのメソッドthen
            return promiseMultiple(ans2, 4); //関数が返してきたPromiseをそのままreturn - ii
        })
        .then((ans3) => {                  // ii で返されたPromiseのメソッドthen
            console.log("最終結果：" + ans3);
        });
}

// Promiseオブジェクトを返す非同期関数の終了をawaitで待つ方法 その1
// awaitが中にある関数は、それ自体がasyncで非同期とならなければならない。
// そのため、Promiseオブジェクトを返す必要があるが、この例では使用するデータ型をvoidとしている。
async function withAwait(): Promise<void>{
    console.log("=== awaitを使った実行 その1 ===");
    const ans  = await promiseMultiple(1, 2);       //promiseMultipleの終了を待つ
    const ans2 = await promiseMultiple(ans, 3);     //promiseMultipleの終了を待つ
    const ans3 = await promiseMultiple(ans2, 4);    //promiseMultipleの終了を待つ
    console.log("最終結果：" + ans3);

    //非同期関数は常にPromiseを返す。
    //ただし、この場合は戻り値がPromise<void>なので、returnなしで暗黙的に返される。
    //後述のanotherWithAwait()と比較して確認すること。
}

// Promiseオブジェクトを返す非同期関数の終了をawaitで待つ方法、 その2
// Promiseオブジェクトを返す必要があるが、この例では使用するデータ型をnumberとしている。
// したがって、withAwait()と異なり、returnが必要になる。
async function anotherWithAwait(): Promise<number>{
    console.log("=== awaitを使った実行 その2 ===");
    const ans  = await promiseMultiple(1, 2);       //promiseMultipleの終了を待つ
    const ans2 = await promiseMultiple(ans, 3);     //promiseMultipleの終了を待つ
    const ans3 = await promiseMultiple(ans2, 4);    //promiseMultipleの終了を待つ
    console.log("最終結果：" + ans3);

    return ans3;
    //非同期関数は常にPromiseを返す。
    //return値が明示的にプロミスでない場合、暗黙的にPromiseでラップされる
    //return ans3; は ↓　の記述と同等ということ
    //return  Promise.resolve(ans3);
}

//asyncが指定された関数を呼び出す記述
//まずは、3つのうち2つをコメントアウトして、1つだけ実行してみる。
//複数を実行すると、時間がかかる処理を待たないため、関数が同時進行する形となる。
withThen();
//withAwait();
//anotherWithAwait();

