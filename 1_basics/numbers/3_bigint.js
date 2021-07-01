// BIGINT

console.log(23472389472389472390472389472389n); // n transforma para bigint
console.log(BigInt(234234));

// operações
console.log(312n + 234n);
console.log(312n * 234n);

// OBS: não é possível fazer operações que misturam Number e Bigint
console.log(2323n + BigInt(234)); // é preciso converter primeiro
