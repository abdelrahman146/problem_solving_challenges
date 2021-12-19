function solution(customers, n) {
  const sum = (array) => array.reduce((total, current) => total + current, 0);
  const shortestTill = (lines) => {
    let shortestTime = sum(lines[0]);
    let shortest = 0;
    for (till in lines) {
      let totalTime = sum(lines[till]);
      if (totalTime < shortestTime) {
        shortestTime = totalTime;
        shortest = till;
      }
    }
    return shortest;
  };
  const longestTill = (lines) => {
    let longestTime = 0;
    let longest = 0;
    for (till in lines) {
      let totalTime = sum(lines[till]);
      if (totalTime > longestTime) {
        longestTime = totalTime;
        longest = till;
      }
    }
    return longest;
  };
  let lines = Array(n).fill([]);
  for (customer of customers) {
    lines[shortestTill(lines)] = [...lines[shortestTill(lines)], customer];
  }
  return sum(lines[longestTill(lines)]);
}
module.exports = solution;
