export function getCoupons() {
  return [
    { code: 'SAVE20NOW', discount: 0.2 },
    { code: 'DISCOUNT50OFF', discount: 0.5 },
  ];
}

export function calculateDiscount(price, discountCode) {
  if (typeof price !== 'number' || price <= 0) {
    return 'Invalid price';
  }

  if (typeof discountCode !== 'string') {
    return 'Invalid discount code';
  }

  let discount = 0;
  if (discountCode === 'SAVE10') {
    discount = 0.1;
  } else if (discountCode === 'SAVE20') {
    discount = 0.2;
  }

  return price - price * discount;
}

export function validateUserInput(username, age) {
  let errors = [];

  if (typeof username !== 'string' || username.length < 3) {
    errors.push('Invalid username');
  }

  if (typeof age !== 'number' || age < 18) {
    errors.push('Invalid age');
  }

  return errors.length === 0 ? 'Validation successful' : errors.join(', ');
}


//boundary testing for username and age
export function isValidUsername(username) {
  const minLength = 5;
  const maxLength = 15;

  return username.length >= minLength && username.length <= maxLength;
}

export function isStrongPassword(password) {
  // Check the length of the password (minimum 8 characters)
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit (number)
  if (!/\d/.test(password)) { 
    return false;
  }

  // If all criteria are met, consider the password strong
  return true;
}