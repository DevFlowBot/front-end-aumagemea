export function rulesPassword(password) {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  return { hasMinLength, hasNumber, hasSymbol };
}

function verifySenha(password) {
  let number = 0;

  const { hasMinLength, hasNumber, hasSymbol } = rulesPassword(password);

  if (hasSymbol) {
    number += 1;
  }

  if (hasNumber) {
    number += 1;
  }

  if (hasMinLength) {
    number += 1;
  }

  return number;
}

function verifyStrong(number) {
  if (number === 1) {
    return 'Senha fraca';
  }
  if (number === 2) {
    return 'Senha média';
  }
  if (number === 3) {
    return 'Senha forte';
  }

  return 'Senha fraca';
}

export function checkPasswordStrength(password) {
  const number = verifySenha(password);
  return verifyStrong(number);
}

export function colorStrengthPassword(strengthPwd = '') {
  if (strengthPwd === 'Senha fraca') {
    return 'red.400';
  }
  if (strengthPwd === 'Senha média') {
    return 'yellow.400';
  }
  if (strengthPwd === 'Senha forte') {
    return 'green.400';
  }

  return 'gray.200';
}

export const formatCpf = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
};

export const formatPhone = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{5})(\d{4})$/, '$1-$2')
    .slice(0, 15);
};
