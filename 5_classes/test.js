function Range() {}
function Strange() {}
Strange.prototype = Range.prototype;

const r = new Range();
const s = new Strange();

const result = r instanceof Strange;
console.log(result);
