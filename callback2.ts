//準備が終了したときに動いてほしい内容を記述した関数
function finishFinally(): void {
    console.log("ようやくできたよ");
}

//準備をする関数、準備完了したら引数で指定された関数を呼び出す
function longPrep(done: () => void) {
    console.log("準備するね");
    console.log("3秒かかるよ");

    //setTimeoutで3000ms待ち、待ちが終わったら無名関数を呼び出す
    const timer = setTimeout(() => {
        done();     //指定された関数を呼び出す
    },3000)

    //以下のような方法もある
    //呼び出す関数を、引数で指定された関数にする。
    // const timer = setTimeout(done,3000);
}

//終わったら関数finishFinallyを呼び出すよう指定して、関数longPrepを実行
longPrep(finishFinally);