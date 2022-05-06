function isPrime(number) {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
sum = 0;
for (let i = 0; i < array.length; i++) {
    let b = isPrime(array[i]);
    if (b) {
        sum += array[i];
    }
}
console.log("tổng số nguyên tố trong mảng là: " + sum);
//# sourceMappingURL=CheckIsPrime.js.map