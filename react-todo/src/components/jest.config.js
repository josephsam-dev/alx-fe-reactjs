module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom', // must match the installed package
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.(test|spec).js?(x)'],
};
