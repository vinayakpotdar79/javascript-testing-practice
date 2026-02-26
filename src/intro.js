export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

//prime number
export function isPrime(n) {
  if (typeof n !== 'number') 
    throw new Error('Input must be a number');
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}