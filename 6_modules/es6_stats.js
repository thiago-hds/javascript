const sum = (x, y) => x + y;
const square = x => x ** 2;

export const mean = data => {
  return data.reduce(sum) / data.length;
};

export const stddev = function (data) {
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
