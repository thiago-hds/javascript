class Stats {
  sum(x, y) {
    return x + y;
  }
  square(x) {
    return x ** 2;
  }

  mean(data) {
    return data.reduce(sum) / data.length;
  }

  stddev(data) {
    const m = mean(data);
    return Math.sqrt(
      data
        .map(x => x - m)
        .map(square)
        .reduce(sum) /
        data.length -
        1
    );
  }
}

export default Stats;
