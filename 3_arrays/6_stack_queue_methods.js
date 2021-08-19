let stack = [];
stack.push(1, 2, 3);
console.log(stack); //[1,2,3]

stack.push([4, 5]);
console.log(stack);//[1, 2, 3, [4, 5]]

let a = [6, 7, 8]
stack.push(...a);
console.log(stack) //[1, 2, 3, [4, 5], 6, 7, 8]

let queue = []
queue.push(1, 2, 3);
console.log(queue); //[1,2,3]
console.log(queue.shift()); //1
console.log(queue); //[2,3]

let pushIn = 9;
console.log(queue.unshift(pushIn)) //3 (length)
console.log(queue); //[ 9, 2, 3 ]
