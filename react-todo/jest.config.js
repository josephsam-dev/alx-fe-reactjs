module.exports = {
  roots: ['<rootDir>/src'],           // Look for tests inside src/
  testEnvironment: 'jsdom',           // Needed for React components
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',  // Transform JSX via Babel
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.(test|spec).js?(x)'],  // Find test files
};
