// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
const test = [0, 1, 1, 2, 3];
console.log(test.length);

function fibonacciGenerator (n) {
    let output = [];

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output;
}
const result = fibonacciGenerator(10);

console.log(result);