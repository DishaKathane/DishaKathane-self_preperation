/** prime number using recursion */
function prime(num, i) {
    if (num <= 2) {
        return (num === 2) ? 1 : 0
    }
    if (num % i == 0) {
        return 0
    };
    if (i * i > num) {
        return 1
    }
    return prime(num, i + 1)
}
console.log(prime(23, 2))