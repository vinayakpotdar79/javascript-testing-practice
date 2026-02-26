import {describe,test,it,expect} from 'vitest';
import {max,fizzBuzz,isPrime} from '../src/intro.js';

describe('max',()=>{
    it('should return the maximum of two numbers',()=>{
        expect(max(1,2)).toBe(2);
    });
})

// test suite for fizzBuzz
describe('fizzBuzz',()=>{

    it('should be divisibled by 3 & 5',()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })

    it('should be divisibled by 3 ',()=>{
        expect(fizzBuzz(9)).toBe("Fizz")
    })

    it('should be divisibled by 5 ',()=>{
        expect(fizzBuzz(10)).toBe("Buzz")
    })

    it('not divisibled by 3 & 5 ',()=>{
        expect(fizzBuzz(17)).toBe("17")
    })
})

// test suite for isPrime
describe('examples.isPrime', () => {

  it('returns true/truthy for small prime numbers', () => {
    // toBe - strict equality
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)

    // toBeTruthy - looser truthiness check
    expect(isPrime(5)).toBeTruthy() // here truthy means values that are not false, 0, '', null, undefined, or NaN
    // expect(isPrime("RIZZ")).toBeTruthy() //it passes it is non-empty string
})

  it('returns false/falsy for non-primes', () => {
    expect(isPrime(1)).toBe(false)
    expect(isPrime(0)).toBe(false)

    // toBeFalsy - looser falsiness check
    expect(isPrime(4)).toBeFalsy()
    expect(isPrime(-7)).toBeFalsy()
  })

  // toEqual - same value, but deep comparison safe for arrays/objects
  it('matches results in an array using toEqual', () => {
    const numbers = [2, 3, 4, 5]
    const results = numbers.map(isPrime)

    console.log(results)

    // expect(results).toBe([true, true, false, true])//fails because toBe checks reference equality for arrays
    expect(results).toEqual([true, true, false, true])
})

  // toContain - to check presence inside collections
  it('detects primes within a filtered list', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    const primes = nums.filter(isPrime)

    console.log(primes)

    expect(primes).toContain(7)
    expect(primes).not.toContain(4)
  })

  // toThrow - for invalid inputs
  it('throws an error when passed a non-number', () => {
    const badCall = () => isPrime('pikachu')

    expect(badCall).toThrow()
    expect(badCall).toThrow("Input must be a number")
  })

  // toBeTypeOf - check the type of the result
  it('has correct type for result', () => {
    expect(isPrime(7)).toBeTypeOf('boolean')
    expect(typeof isPrime(8)).toBe('boolean')
  })


  // parameterized test using it.each
it.each([
    {input: 1, expected: false},
    {input: 2, expected: true},
    {input: 3, expected: true},
    {input: 4, expected: false},
    {input: 5, expected: true}])
    ('isPrime($i) should return $s', ({input, expected}) => {
  expect(isPrime(input)).toBe(expected);
});
})

