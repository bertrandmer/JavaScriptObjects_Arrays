console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
const arraySum (numbers) {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
}
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
const book {}
book.title = The Wealth of Nations;
book.pages = 285;
book.readCount = 2;
book.info = () =>{
    return '${book.title, ${book.pages}, ${book.readCount} times.';
};

console.log(book.info());
