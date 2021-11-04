//準備が終了したときに動いてほしい内容を記述した関数
function finish(): void {
    console.log("できたよ");
}

//準備をする関数、準備完了したら引数で指定された関数を呼び出す
function prep(done: () => void) {
    console.log("準備するね");
    console.log("...");

    done();     //指定された関数を呼び出す
}

//終わったら関数finishを呼び出すよう指定して、関数prepを実行
prep(finish);