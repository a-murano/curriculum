class Taiyaki{
    constructor(nakami){
        this.nakami = nakami;
    }
    taiyakiNakami(){
    console.log("中身は"+this.nakami+"です");
    }
}
let anko = new Taiyaki("あんこ");
anko.taiyakiNakami();

let cream = new Taiyaki("クリーム");
cream.taiyakiNakami();

let cheese = new Taiyaki("チーズ");
cheese.taiyakiNakami();