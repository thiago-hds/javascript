// flat e flatmap

//flat
let array = [
    1,
    [2, 2], //1 nivel de anihamento
    [[3, 3, 3], [3, 3, 3]] // 2 niveis
]
console.log(array.flat()) //[ 1, 2, 2, [ 3, 3, 3 ], [ 3, 3, 3 ] ]
console.log(array.flat(2)) //[1, 2, 2, 3, 3, 3, 3, 3, 3]

//flatMap
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words); // => ["hello", "world", "the", "definitive", "guide"];

//concat()
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
let concat = a.concat(b, c);
console.log(concat); //[1, 2, 3, 4, 5, 6, 7, 8, 9]