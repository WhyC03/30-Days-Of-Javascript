function counter() {
    let count = 0; 
    function inner() {
        count++;
        return count;
    }

    return inner;
}

const counter1 = counter();
console.log(counter1());
console.log(counter1());

const counter2 = counter();
console.log(counter2()); 
