outer: for (let i = 0; i < 10; i++) {
    inner: for (let j = 0; j < 10; j++) {
        console.log(i, j)
        if (j === 5) {
            break outer; //sai do loop externo e finaliza a execução
        }
    }
}

block: {
    console.log("hello");
    console.log("darkness");
    console.log("my");
    console.log("old");
    break block;
    console.log("friend"); //nao chega aqui
}

const data = [1, 2, 3, undefined, undefined, 7, 8, 9]
let total = 0;
for (let i = 0; i < data.length; i++) {
    if (!data[i]) continue; // Can't proceed with undefined data
    total += data[i];
}
console.log("Total:", total)

function div(n1, n2) {
    if (n2 == 0) {
        throw new Error("Can't divide by 0");
    }
    return n1 / n2;
}
div(5, 0);

function parseJSON(s) {
    try {
        return JSON.parse(s);
    } catch {
        // Something went wrong but we don't care what it was
        return undefined;
    }
}