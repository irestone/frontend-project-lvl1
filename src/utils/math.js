export const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

export const isEven = (n) => n % 2 === 0;

/**
 * An algorithm's taken from here (Optimized School Method) https://www.geeksforgeeks.org/primality-test-set-1-introduction-and-school-method/
 */
export const isPrime = (n) => {
  // Corner cases

  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  // This is checked so that we can skip
  // middle five numbers in below loop

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

export const genProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const member = start + i * step;
    result.push(member);
  }

  return result;
};
