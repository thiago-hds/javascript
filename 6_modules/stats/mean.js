const sum = (x, y) => x + y;

exports.mean = data => {
  return data.reduce(sum) / data.length;
};
