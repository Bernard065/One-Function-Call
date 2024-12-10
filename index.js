function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if (hasBeenCalled) {
            return undefined;
        }
        result = fn(...args);
        hasBeenCalled = true;
        return result;
    };
}

// Example 1:
const fn1 = (a, b, c) => (a + b + c);
const onceFn1 = once(fn1);

console.log(onceFn1(1, 2, 3)); // 6 (first call)
console.log(onceFn1(2, 3, 6)); // undefined (fn is not called again)

// Example 2:
const fn2 = (a, b, c) => (a * b * c);
const onceFn2 = once(fn2);

console.log(onceFn2(5, 7, 4)); // 140 (first call)
console.log(onceFn2(2, 3, 6)); // undefined (fn is not called again)
console.log(onceFn2(4, 6, 8)); // undefined (fn is not called again)
