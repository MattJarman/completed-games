const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
  collectCoverageFrom: [
    './src/**',
    '!./**/_*.tsx',
    '!./src/lib/utils/index.ts',
    '!./src/lib/contentful/index.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1'
  }
}

module.exports = createJestConfig(customJestConfig)
