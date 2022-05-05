let sum: number = 0;

function fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

}
for (let i = 0; i < 5; i++) {
    sum += fibonacci(i);
}
console.log(sum);