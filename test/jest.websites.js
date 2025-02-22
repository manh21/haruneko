export default {
    preset: 'ts-jest',
    rootDir: '../web/src',
    testMatch: [ '**/engine/websites/*[_.]e2e.[jt]s' ],
    globalSetup: '../../test/PuppeteerSetup.ts',
    globalTeardown: '../../test/PuppeteerTeardown.ts',
    testEnvironment: '../../test/PuppeteerEnvironment.ts',
    reporters: [
        'default',
        'jest-junit',
        '../../test/github-test-reporter'
    ],
    testTimeout: 25_000,
    globals: {
        'ts-jest': {
            tsconfig: {
                esModuleInterop: true,
                allowSyntheticDefaultImports: true
            }
        }
    }
};