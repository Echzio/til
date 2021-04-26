import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
};

export default config;
