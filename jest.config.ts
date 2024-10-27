// module.exports = {
//   preset: 'jest-preset-angular',
//   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(tsx|ts|js|html)$': 'jest-preset-angular',
//     '^.+\\.(tsx|jsx|html)$': 'babel-jest',
//   },
//   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
//   collectCoverage: true,
//   coverageReporters: ['html', 'lcov', 'text-summary'],
//   coverageDirectory: 'coverage',
//   globals: {
//     'jest-preset-angular': {
//       tsconfig: 'tsconfig.spec.json',
//       useESM: true, 
//     },
//   },
// };
globalThis.ngJest = {
    skipNgcc: true,
    tsconfig: 'tsconfig.spec.json', // this is the project root tsconfig
  };
  
  /** @type {import('@jest/types').Config.InitialOptions} */
  module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest', // Only transform .ts files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!flat)/', // Exclude modules except 'flat' from transformation
    ],
    moduleDirectories: ['node_modules', 'src'],
    fakeTimers: {
      enableGlobally: true,
    }
  };