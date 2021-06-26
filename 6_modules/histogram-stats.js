const sum = (x, y) => x + y;
const square = x => x ** 2;

exports.mean = data => {
  return data.reduce(sum) / data.length;
};

exports.stddev = function (data) {
  const m = mean(data);
  return Math.sqrt(
    data
      .map(x => x - m)
      .map(square)
      .reduce(sum) /
      data.length -
      1
  );
};

class Histogram {
  hello() {
    console.log('Hello');
  }
}

export default Histogram;
