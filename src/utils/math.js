export const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

export const isEven = (n) => n % 2 === 0;

export const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5, sqrt = Math.sqrt(n); i <= sqrt; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

export const genProgression = (a1, d, length) => {
  const result = [];

  for (let n = 1; n <= length; n += 1) {
    const an = a1 + (n - 1) * d;
    result.push(an);
  }

  return result;
};
