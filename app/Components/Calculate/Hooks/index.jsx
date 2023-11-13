
const canSumNumerology = (n) => n > 9 && ![11, 22].includes(n);

const sum = (a, b) => a + b;

const sumDigits = (n) => `${n}`.split("").map(Number).reduce(sum);

const sumNumerology = (n) => {
  return canSumNumerology(n) ? sumNumerology(sumDigits(n)) : n;
};

const sumListNumerology = (list) => {
  const listNumerology = list.map(sumNumerology).reduce(sum);

  return sumNumerology(listNumerology);
};

const calculateNumerologyOfBirthDay = (arr) => {
  return sumListNumerology(arr);
};

export {
  sumNumerology,
  sumListNumerology,
  calculateNumerologyOfBirthDay
};
