// iterando sobre arrays

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1- FOR/OF
for (let n of a) { console.log(n) }

// 2 - entries()
for ([index, value] of a.entries()) {
    console.log(index, value)
}

// 3 - forEach()
let str = ""
a.forEach(element => {
    str += element;
})
console.log(str);
