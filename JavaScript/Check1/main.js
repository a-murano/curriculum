let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    console.log(num + 'は偶数です');
}
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        isEven(numbers[i]);
    }
}
class Car{
    constructor(gass,number){
        this.gass=gass;
        this.number=number;
    }
    getNumGas(){
        console.log("ガソリンは"+this.gass+"です。ナンバーは"+this.number+"です")
    }
}
let mycar = new Car(123,1012);
mycar.getNumGas();