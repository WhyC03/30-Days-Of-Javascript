function string_chop(str, size) {
    if (size === undefined || size <= 0) {
        return [str];
    }

    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }

    return result;
}

console.log(string_chop('Scaler'));
console.log(string_chop('Scaler', 2));
