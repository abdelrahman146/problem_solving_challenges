function solution(number) {
  let figures = [];
  let available = true;
  while (available) {
    if (number / 1000 >= 1) {
      figures.push('M');
      number = number - 1000;
    } else if (number / 1000 >= 0.9) {
      figures.push('CM');
      number = number - 900;
    } else if (number / 500 >= 1) {
      figures.push('D');
      number = number - 500;
    } else if (number / 500 >= 0.8) {
      figures.push('CD');
      number = number - 400;
    } else if (number / 100 >= 1) {
      figures.push('C');
      number = number - 100;
    } else if (number / 100 >= 0.9) {
      figures.push('XC');
      number = number - 90;
    } else if (number / 50 >= 1) {
      figures.push('L');
      number = number - 50;
    } else if (number / 50 >= 0.8) {
      figures.push('XL');
      number = number - 40;
    } else if (number / 10 >= 1) {
      figures.push('X');
      number = number - 10;
    } else if (number / 10 >= 0.9) {
      figures.push('IX');
      number = number - 9;
    } else if (number / 5 >= 1) {
      figures.push('V');
      number = number - 5;
    } else if (number / 5 >= 0.8) {
      figures.push('IV');
      number = number - 4;
    } else if (number < 5 && number > 0) {
      figures.push('I');
      number = number - 1;
    } else {
      available = false;
    }
  }
  return figures.join('');
}

module.exports = solution;
