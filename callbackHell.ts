//乗算を実行する関数。(3秒かかる)
//計算が終了したらメッセージを表示し、関数(after)で指定された処理に結果を渡しスタートする。
function slowMultiple(opr1: number, opr2: number, after: (ans: number) => void): void {
    //setTimeoutで3000ms待ち、待ちが終わったら無名関数を呼び出す
    const timer = setTimeout(() => {
        let result = opr1 * opr2;
        console.log(opr1 + "*" + opr2 + "="+ result);
        after(result);     //指定された関数を呼び出す
    }, 3000)
}

// //a: 1*2を完了したら次に、、
// //  b: aの答え*3を完了したら次に、
// //    c: bの答え*4を完了したら次に、計算結果を表示
slowMultiple(1,2,(ans) =>{
    slowMultiple(ans, 3,(ans2) =>{
        slowMultiple(ans2, 4,(ans3) =>{
            console.log("最終結果："+ans3);        
        });
    });
});

