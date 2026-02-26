import { describe,it,expect } from "vitest";
import { calculateDiscount ,validateUserInput,isValidUsername,isStrongPassword} from "../src/validation";

describe('calculateDiscount', () => { 
  it('should apply 10% discount for SAVE10 code', () => {
    expect(calculateDiscount(100, 'SAVE10')).toBe(90);
  });

  it('should apply 20% discount for SAVE20 code', () => {
    expect(calculateDiscount(100, 'SAVE20')).toBe(80);
  }); 
  it('should return original price for invalid discount code', () => {
    expect(calculateDiscount(100, 'INVALID')).toBe(100);
  });

  it('should return error message for non-numeric price', () => {
    expect(calculateDiscount('100', 'SAVE10')).toBe('Invalid price');
  }); 
  it('should return error message for negative price', () => {
    expect(calculateDiscount(-50, 'SAVE10')).toBe('Invalid price');
  });

  it('should return error message for non-string discount code', () => {
    expect(calculateDiscount(100, 123)).toBe('Invalid discount code');
  });
});

describe('validateUserInput', () => {
  it('should return validation successful for valid input', () => {
    expect(validateUserInput('JohnDoe', 25)).toBe('Validation successful');
  });
  it('should return error message for invalid username', () => {
    expect(validateUserInput('JD', 25)).toBe('Invalid username');
  });

  it('should return error message for invalid age', () => {
    expect(validateUserInput('JohnDoe', 17)).toBe('Invalid age');
  }); 
  it('should return error messages for both invalid username and age', () => {
    expect(validateUserInput('JD', 17)).toBe('Invalid username, Invalid age');
  });

});

describe('isValidUsername', () => {
  it('should return true for valid username', () => {
    expect(isValidUsername('ValidUser')).toBe(true);
  }); 
  it('should return false for username that is too short', () => {
    expect(isValidUsername('Usr')).toBe(false);
  });

  it('should return false for username that is too long', () => {
    expect(isValidUsername('ThisIsAVeryLongUsername')).toBe(false);
  }); 
  it('should return true for username at minimum length', () => {
    expect(isValidUsername('User1')).toBe(true);
  });

  it('should return true for username at maximum length', () => {
    expect(isValidUsername('User1234567890')).toBe(true); 
    });
});

describe('isStrongPassword', () => {
  it('should return true for a strong password', () => {
    expect(isStrongPassword('Str0ngP@ss')).toBe(true);
  });
  it('should return false for a password that is too short', () => {
    expect(isStrongPassword('Shrt1')).toBe(false);
  });

  it('should return false for a password without uppercase letters', () => {
    expect(isStrongPassword('weakp@ss1')).toBe(false);
  });
  
  it('should return false for a password without lowercase letters', () => {
    expect(isStrongPassword('WEAKP@SS1')).toBe(false);
  });

  it('should return false for a password without numbers', () => {
    expect(isStrongPassword('WeakP@ss')).toBe(false);
  });
});