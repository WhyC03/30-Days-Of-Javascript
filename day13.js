function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (!(key in cache)) {
            cache[key] = func(...args);
        }

        return cache[key];
    };
}


const fibonacci = memoize(function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
});

const result = fibonacci(5);
console.log(result);