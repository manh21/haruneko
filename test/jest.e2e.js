export default {
    preset: 'ts-jest',
    rootDir: '../web/src',
    testMatch: [ '**/*[_.]e2e.[jt]s' ],
    testPathIgnorePatterns: [ '<rootDir>/engine/websites/' ],
    globalSetup: '../../test/PuppeteerSetup.ts',
    globalTeardown: '../../test/PuppeteerTeardown.ts',
    testEnvironment: '../../test/PuppeteerEnvironment.ts',
    reporters: [
        'default',
        'jest-junit',
        '../../test/github-test-reporter'
    ],
    testTimeout: 5000,
    globals: {
        'ts-jest': {
            tsconfig: {
                esModuleInterop: true,
                allowSyntheticDefaultImports: true
            }
        }
    }
};