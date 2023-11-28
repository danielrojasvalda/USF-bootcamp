module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/*.tests.js'],
    verbose: true,
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  