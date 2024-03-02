export const convertToLowerOrUpperCase = (arr, caseParam) => {
  if (!arr || !caseParam) return;
  return arr.map((str, index) => {
    if (caseParam.toLowerCase() === 'upper') {
      return str.toUpperCase();
    } else if (caseParam.toLowerCase() === 'lower') {
      return str.toLowerCase();
    } else return str;
  });
};

export const convertToFilteredLowerOrUpperCase = (arr, caseParam) => {
  if (!arr || !caseParam) return;
  return arr
    .filter((str) => typeof str === 'string')
    .map((str) => {
      if (caseParam.toLowerCase() === 'upper') {
        return str.toUpperCase();
      } else if (caseParam.toLowerCase() === 'lower') {
        return str.toLowerCase();
      } else return str;
    });
};

export const filterUsersByAge = (users) => {
  if (!users) return;
  return users.filter((user) => user.age >= 18);
};

export const filterUsersByParam = (users, param, paramValue, bracket) => {
  if (!users || !param) return;
  switch (typeof paramValue) {
    case 'boolean':
      return users.filter((user) => user[param] === paramValue);
    case 'number':
      return bracket === '>'
        ? users.filter((user) => user[param] > paramValue)
        : users.filter((user) => user[param] < paramValue);
    default:
      return null;
  }
};

export const divisibleAverage = (numbers, divisor) => {
  if (!numbers || !divisor || numbers.length === 0) return;
  return numbers
    .filter((num) => num % divisor === 0)
    .reduce((acc, curr, index, array) => {
      acc += curr;
      if (index === array.length - 1) {
        return acc / array.length;
      } else {
        return acc;
      }
    }, 0);
};
