let sum = 0;
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
for (let i = 0; i < 5; i++) {
    sum += fibonacci(i);
}
console.log(sum);
//# sourceMappingURL=fibonaci.js.map