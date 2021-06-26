// TIMERS

// setTimeout
setTimeout(() => console.log('ready'), 1000); // em 1s
setTimeout(() => console.log('set'), 2000); // em 2s
setTimeout(() => console.log('go'), 3000); // em 3s

// setInterval
const interval = setInterval(() => console.log('1s'), 1000); // a cada 1s
setTimeout(() => clearInterval(interval), 10000); // cancelar apos 10s
