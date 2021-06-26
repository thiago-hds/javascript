// THE CONSOLE API

// console.log e seus aliases:
console.log('log');
console.debug('debug');
console.info('info');
console.warn('warn');
console.error('error');

// console.assert
console.assert(4 === 2, '4 is not 2'); // Assertion failed: 4 is not 2

// console.clear
// console.clear(); // limpa console
const arr = [
  { fullName: 'Mary Watson', age: 23, city: 'Los Angeles' },
  { fullName: 'Peter Wayne', age: 45, city: 'Atlanta' },
  { fullName: 'Monica Chambers', age: 65, city: 'Philadelphia' },
];
console.table(arr);

// console.trace
console.trace('lets trace');

// console.count()
console.count('thiago');
console.count('thiago');
console.count('thiago');
console.countReset('thiago');

// console.group
console.group('GROUP_1');
console.log('foo');
console.log('bar');
console.groupEnd();
console.group('GROUP_2');
console.log('foo2');
console.log('bar2');
console.groupEnd();

//console.time
console.time('timer');
for (let i = 0; i < 10000; i++) {}
console.timeLog('timer', 'kbou');
