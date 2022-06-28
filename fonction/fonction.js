let a;
let b;

function modulo(a, b) {

    if (a % b == 0) {
        document.write("ok");
    }
    if (a % b != 0){
        document.write("nook");
    } return a%b

};
console.log(modulo(10,10))



let c = (e, d) => {
    if (e % d == 0) {
        document.write("ok");
    }
    if (e % d != 0){
        document.write("nook");
    } return e%d
};

console.log(c(10,10))
